// app/components/ContactForm.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CONTACT_CONTENT } from "@/app/mock/constants/contact";
import { contactFormSchema, ContactFormData } from "@/app/lib/validations/contactValidation";
import styles from "@/app/styles/sections/Contact.module.css";

interface ContactFormProps {
  showEnvelope?: boolean;
}

const ContactForm = ({ showEnvelope = false }: ContactFormProps) => {
  const { form, images } = CONTACT_CONTENT;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lookingFor: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      {showEnvelope && (
        <div className={styles.envelopeCorner}>
          <Image
            src={images.envelope}
            alt="Envelope"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      )}

      <div className={styles.formContent}>
        <h3 className={styles.formTitle}>{form.title}</h3>

        {/* Status message with fixed height container */}
        <div className={styles.statusContainer}>
          {submitStatus === "success" && (
            <div className={styles.successMessage}>{form.successMessage}</div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>{form.errorMessage}</div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          <div className={styles.formFields}>
            {form.fields.map(({ label, type, name, placeholder }) => {
              const fieldName = name as keyof ContactFormData;
              const error = errors[fieldName];

              return (
                <div key={name} className={styles.formField}>
                  <label className={styles.formLabel}>{label}</label>
                  <input
                    type={type}
                    {...register(fieldName)}
                    className={`${styles.formInput} ${error ? styles.inputError : ""}`}
                    placeholder={placeholder}
                    aria-invalid={error ? "true" : "false"}
                  />
                  {/* Always render error text element, even if empty */}
                  <p className={styles.errorText}>{error?.message || ""}</p>
                </div>
              );
            })}

            <div className={styles.formField}>
              <label className={styles.formLabel}>{form.textareaLabel}</label>
              <textarea
                {...register("message")}
                rows={4}
                className={`${styles.formTextarea} ${errors.message ? styles.inputError : ""}`}
                placeholder={form.textareaPlaceholder}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {/* Always render error text element, even if empty */}
              <p className={styles.errorText}>{errors.message?.message || ""}</p>
            </div>
          </div>

          <button
            name="submit"
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : form.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
