import { ICON_BASE, IMAGE_BASE } from "./urls";

export const CONTACT_CONTENT = {
  title: "Contact Us",
  description: "Talk with us to know how we can make you a part of a thriving digital landscape",
  contactInfo: {
    phone: "+1 315 308 0901",
    email: "sales@chromezy.com",
  },
  form: {
    title: "Let's Talk!",
    fields: [
      { label: "What's your name?", type: "text", name: "name", placeholder: "John Doe" },
      {
        label: "What's your email address?",
        type: "email",
        name: "email",
        placeholder: "john@example.com",
      },
      {
        label: "What's your phone number?",
        type: "tel",
        name: "phone",
        placeholder: "+1 234 567 890",
      },
      {
        label: "What are you looking for?",
        type: "text",
        name: "lookingFor",
        placeholder: "e.g., Web Development",
      },
    ],
    textareaLabel: "How can we help you?",
    textareaPlaceholder: "Tell us about your project...",
    submitButton: "Send Request",
    successMessage: "Thank you! We'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
  images: {
    background: `${IMAGE_BASE}/contact/contact-bg.png`,
    logo: `${IMAGE_BASE}/contact/contact-logo.png`,
    envelope: `${ICON_BASE}/contact/envelop-bottom-partial.svg`,
    phoneIcon: `${ICON_BASE}/contact/phone.svg`,
    emailIcon: `${ICON_BASE}/contact/mail.svg`,
  },
};
