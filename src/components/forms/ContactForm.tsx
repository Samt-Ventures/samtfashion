"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid phone number"),
  interest: z.enum([
    "Custom Tailoring",
    "Luxury Thrift Inquiry",
    "General Question",
  ]),
  message: z.string().min(10, "Please share a bit more detail"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: "Custom Tailoring",
    },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  const fieldClass =
    "w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 text-base text-primary transition-colors outline-none";

  return (
    <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[24px] premium-shadow border border-surface-variant">
      <h3 className="font-display text-2xl text-primary mb-8">Send an Inquiry</h3>

      {submitted ? (
        <div className="rounded-2xl bg-surface-container-low p-6 border border-outline-variant">
          <p className="font-display text-xl text-primary mb-2">Thank you</p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Your inquiry has been received. A member of the SAMT team will be in
            touch shortly.
          </p>
          <button
            type="button"
            className="font-label text-secondary tracking-widest"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label
              className="block font-label tracking-widest text-on-surface-variant mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
              className={cn(fieldClass, errors.name && "border-error")}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-error">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                className="block font-label tracking-widest text-on-surface-variant mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                autoComplete="email"
                className={cn(fieldClass, errors.email && "border-error")}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-error">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                className="block font-label tracking-widest text-on-surface-variant mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                autoComplete="tel"
                className={cn(fieldClass, errors.phone && "border-error")}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-error">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block font-label tracking-widest text-on-surface-variant mb-2"
              htmlFor="interest"
            >
              Area of Interest
            </label>
            <select
              id="interest"
              className={cn(fieldClass, "appearance-none")}
              {...register("interest")}
            >
              <option>Custom Tailoring</option>
              <option>Luxury Thrift Inquiry</option>
              <option>General Question</option>
            </select>
          </div>

          <div>
            <label
              className="block font-label tracking-widest text-on-surface-variant mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="How can we assist you?"
              className={cn(fieldClass, "resize-none", errors.message && "border-error")}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-error">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full bg-primary hover:bg-primary-container mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Submit Inquiry"}
          </Button>
        </form>
      )}
    </div>
  );
}
