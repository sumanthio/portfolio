import type { ContactFormData, FormStatus } from '@/types/index';

/**
 * Validates an email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  // Validate name
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }

  // Validate email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate message
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submits contact form data (mock implementation)
 */
export async function submitContactForm(data: ContactFormData): Promise<FormStatus> {
  try {
    // Validate form data
    const { isValid, errors } = validateContactForm(data);

    if (!isValid) {
      const errorMessages = Object.values(errors).join(', ');
      return { type: 'error', message: errorMessages };
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return {
      type: 'success',
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    // Return error response
    return {
      type: 'error',
      message: 'Something went wrong. Please try again later.',
    };
  }
}
