"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  application: string;
}

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    application: "Study Permit",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/meeqjzjw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Track conversion
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "form_submission", {
            event_category: "engagement",
            event_label: "Lead Form",
          });
        }
        
        // Redirect to success page after a brief moment
        setTimeout(() => {
          router.push("/success");
        }, 1500);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
      console.error("Form submission error:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-left text-sm font-medium mb-1.5 text-slate-200">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            disabled={status === "loading" || status === "success"}
            className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-left text-sm font-medium mb-1.5 text-slate-200">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            required
            disabled={status === "loading" || status === "success"}
            className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="application" className="block text-left text-sm font-medium mb-1.5 text-slate-200">
            Application Type
          </label>
          <select
            id="application"
            name="application"
            value={formData.application}
            onChange={handleInputChange}
            disabled={status === "loading" || status === "success"}
            className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="Study Permit">Study Permit</option>
            <option value="Express Entry">Express Entry</option>
            <option value="Work Permit">Work Permit</option>
            <option value="Family Sponsorship">Family Sponsorship</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          aria-label="Submit form to receive checklist"
        >
          {status === "loading" && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {status === "loading" ? "Submitting..." : status === "success" ? "Success! Redirecting..." : "Submit & Get Checklist"}
        </button>

        {status === "error" && (
          <div
            className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        {status === "success" && (
          <div
            className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-200 text-sm"
            role="status"
          >
            ✓ Thank you! Check your email for the checklist.
          </div>
        )}
      </form>

      <p className="mt-6 text-sm text-slate-400">
        After submitting, you can also download your checklist here:{" "}
        <a
          href="/checklist.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Download Checklist PDF
        </a>
      </p>
    </div>
  );
}