"use client";

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CONTACT_CONTENT } from "@/app/mock/constants";
import { contactFormSchema, ContactFormData } from "@/app/lib/validations/contactValidation";
import styles from "@/app/styles/sections/Contact.module.css";
import { submitContactForm } from "@/app/effects/contactApi";

/*
  Contact Us form with validations and submit functionality
  - Used react-hook-form here
  - For validation zod is used with the hooks-resolvers
*/

const ContactForm = () => {
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
      await submitContactForm(data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.envelopeCorner}>
        <Image
          src={images.envelope}
          alt="Envelope"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className={styles.formContent}>
        <h3 className={styles.formTitle}>{form.title}</h3>

        <div className={styles.statusContainer}>
          {submitStatus === "success" && (
            <div className={styles.successMessage}>{form.successMessage}</div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>{form.errorMessage}</div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
              <p className={styles.errorText}>{errors.message?.message || ""}</p>
            </div>
          </div>

          <button
            id="submitContactForm"
            name="submit"
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
            aria-label="submitContactForm"
          >
            {isSubmitting ? "Sending..." : form.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
