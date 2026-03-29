import ContactForm from "@/app/components/forms/ContactForm";
import { submitContactForm } from "@/app/effects/contactApi";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";

/*
  This page tests:
  - The form fields rendering
  - The form validation
  - The form submission
*/

// Mock the API
jest.mock("../../effects/contactApi", () => ({
  submitContactForm: jest.fn(),
}));

const mockSubmitContactForm = submitContactForm as jest.MockedFunction<typeof submitContactForm>;

// Mock console.error to suppress expected error messages in tests
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering Form Fields", () => {
    it("renders form with all fields and envelope conditionally", () => {
      render(<ContactForm />);

      expect(screen.getByText("Let's Talk!")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /submitcontactform/i })).toBeInTheDocument();
      expect(screen.getByText("Send Request")).toBeInTheDocument();

      expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("john@example.com")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("+1 234 567 890")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("e.g., Web Development")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Tell us about your project...")).toBeInTheDocument();
    });
  });

  describe("Validation of the Form fields", () => {
    const fillField = (placeholder: string, value: string) => {
      fireEvent.input(screen.getByPlaceholderText(placeholder), { target: { value } });
    };

    it("shows all validation errors correctly", async () => {
      render(<ContactForm />);

      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name: /submitcontactform/i }));
      });

      await waitFor(() => {
        expect(screen.getByText("Name is required")).toBeInTheDocument();
        expect(screen.getByText("Email is required")).toBeInTheDocument();
        expect(screen.getByText("Phone number is required")).toBeInTheDocument();
        expect(screen.getByText("This field is required")).toBeInTheDocument();
        expect(screen.getByText("Message is required")).toBeInTheDocument();
      });

      await act(async () => {
        fillField("John Doe", "John Smith");
        fillField("+1 234 567 890", "+1234567890");
        fillField("e.g., Web Development", "Web Development");
        fillField("Tell us about your project...", "This is a test message that is long enough");
        fillField("john@example.com", "invalid-email");
      });

      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name: /submitcontactform/i }));
      });

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
      });

      await act(async () => {
        fillField("john@example.com", "john@example.com");
        fillField("+1 234 567 890", "abc");
      });

      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name: /submitcontactform/i }));
      });

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
      });

      await act(async () => {
        fillField("John Doe", "J");
        fillField("+1 234 567 890", "+1234567890");
        fillField("Tell us about your project...", "Short");
      });

      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name: /submitcontactform/i }));
      });

      await waitFor(() => {
        expect(screen.getByText("Name must be at least 2 characters")).toBeInTheDocument();
        expect(screen.getByText("Message must be at least 10 characters")).toBeInTheDocument();
      });
    });
  });

  describe("Submission of the form", () => {
    const fillValidForm = () => {
      fireEvent.input(screen.getByPlaceholderText("John Doe"), {
        target: { value: "John Smith" },
      });
      fireEvent.input(screen.getByPlaceholderText("john@example.com"), {
        target: { value: "john@example.com" },
      });
      fireEvent.input(screen.getByPlaceholderText("+1 234 567 890"), {
        target: { value: "+1234567890" },
      });
      fireEvent.input(screen.getByPlaceholderText("e.g., Web Development"), {
        target: { value: "Web Development" },
      });
      fireEvent.input(screen.getByPlaceholderText("Tell us about your project..."), {
        target: { value: "This is a test message that is long enough" },
      });
    };

    it("handles successful submission", async () => {
      mockSubmitContactForm.mockResolvedValueOnce({
        success: true,
        message: "Form submitted successfully",
      });

      render(<ContactForm />);
      const submitButton = screen.getByRole("button", { name: /submitcontactform/i });

      await act(async () => {
        fillValidForm();
        fireEvent.click(submitButton);
      });

      await waitFor(() => {
        expect(mockSubmitContactForm).toHaveBeenCalledWith({
          name: "John Smith",
          email: "john@example.com",
          phone: "+1234567890",
          lookingFor: "Web Development",
          message: "This is a test message that is long enough",
        });
      });

      await waitFor(() => {
        expect(screen.getByText("Thank you! We'll get back to you soon.")).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByPlaceholderText("John Doe")).toHaveValue("");
      });
    });

    it("handles submission errors", async () => {
      mockSubmitContactForm.mockRejectedValueOnce(new Error("API Error"));

      render(<ContactForm />);
      const submitButton = screen.getByRole("button", { name: /submitcontactform/i });

      await act(async () => {
        fillValidForm();
        fireEvent.click(submitButton);
      });

      await waitFor(() => {
        expect(mockSubmitContactForm).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
      });
    });
  });
});
