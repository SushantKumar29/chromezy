import { ContactFormData } from "../types";

// Dummy API integration
export const submitContactForm = async (
  data: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Submitting to Strapi:", data);

  return { success: true, message: "Form submitted successfully" };
};
