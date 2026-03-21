import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  lookingFor: z
    .string()
    .min(1, "This field is required")
    .min(2, "Please tell us what you're looking for"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
