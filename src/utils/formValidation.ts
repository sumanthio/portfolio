/**
 * Form validation utilities with TypeScript
 */

import type { ContactFormData, FormStatus } from '../types';

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate name
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Validate email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate message
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Creates a form status object
 */
export function createFormStatus(type: 'success' | 'error' | 'idle', message = ''): FormStatus {
  return { type, message };
}

/**
 * Handles form submission errors
 */
export function handleFormError(error: unknown): FormStatus {
  let errorMessage = 'An unexpected error occurred';

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  return createFormStatus('error', errorMessage);
}

/**
 * Sanitizes form input to prevent XSS
 */
export function sanitizeFormInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitizes an entire contact form
 */
export function sanitizeContactForm(formData: ContactFormData): ContactFormData {
  return {
    name: sanitizeFormInput(formData.name),
    email: sanitizeFormInput(formData.email),
    message: sanitizeFormInput(formData.message),
  };
}
