"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const courseOptions = [
  "IELTS",
  "PTE",
  "Computer & ICT",
  "German",
  "Nurse Aide",
  "Caregiving & Disability",
  "Other",
];

const contactMethodOptions = ["Email", "Phone", "WhatsApp"] as const;

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  courseOfInterest: z.string().min(1, "Please select a course of interest."),
  preferredContactMethod: z.enum(contactMethodOptions),
  message: z.string().trim().min(10, "Please share a few more details (min. 10 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm({ defaultCourse }: { defaultCourse?: string } = {}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      courseOfInterest: defaultCourse ?? "",
      preferredContactMethod: "Email",
      message: "",
    },
  });

  const [submitError, setSubmitError] = React.useState<string | null>(null);

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      // Mock submission — replace with a real API call once the backend is available.
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log("Contact enquiry (mock submission):", values);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your enquiry. Please try again.");
    }
  }

  if (isSubmitSuccessful && !submitError) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-orange" />
        <h3 className="font-heading text-lg font-bold text-navy">Enquiry Sent</h3>
        <p className="max-w-sm text-sm text-muted">
          Thank you for reaching out. This is a mock submission for development —
          no data has been sent yet, as the backend is not connected.
        </p>
        <Button variant="outline" onClick={() => reset()} type="button">
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-lg border border-border bg-white p-6 sm:p-8"
    >
      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-navy">
          Full Name <span className="text-orange">*</span>
        </label>
        <Input id="fullName" placeholder="Your full name" {...register("fullName")} aria-invalid={!!errors.fullName} />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email <span className="text-orange">*</span>
          </label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone Number
          </label>
          <Input id="phone" type="tel" placeholder="Optional" {...register("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="courseOfInterest" className="mb-1.5 block text-sm font-medium text-navy">
          Course of Interest <span className="text-orange">*</span>
        </label>
        <Select id="courseOfInterest" {...register("courseOfInterest")} aria-invalid={!!errors.courseOfInterest}>
          <option value="" disabled>
            Select a course
          </option>
          {courseOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        {errors.courseOfInterest && (
          <p className="mt-1.5 text-xs text-red-600">{errors.courseOfInterest.message}</p>
        )}
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-navy">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-2">
          {contactMethodOptions.map((method) => (
            <label
              key={method}
              className="focus-within:ring-2 focus-within:ring-orange focus-within:ring-offset-2 relative cursor-pointer rounded-full"
            >
              <input
                type="radio"
                value={method}
                {...register("preferredContactMethod")}
                className="peer sr-only"
              />
              <span className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy transition-colors peer-checked:border-orange peer-checked:bg-orange peer-checked:text-white">
                {method}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message <span className="text-orange">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your goals and how we can help..."
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
