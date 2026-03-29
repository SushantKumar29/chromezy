export interface ContactFormProps {
  showEnvelope?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  lookingFor: string;
  message: string;
}
