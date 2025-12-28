"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "Is DocRoute affiliated with IRCC?",
      a: "No. We are an independent platform that helps organize documents. We are not affiliated with IRCC or the Government of Canada.",
    },
    {
      q: "Does using DocRoute guarantee approval?",
      a: "No. Approval decisions are made by IRCC. We help reduce document errors and ensure your application is complete and well-organized.",
    },
    {
      q: "Is my data secure?",
      a: "Security is a top priority. All files are encrypted in transit (HTTPS) and at rest. We follow industry best practices for data protection and never share your information with third parties.",
    },
    {
      q: "Is this free?",
      a: "The checklist is free. Our document preparation service will have a fee once launched. Optional expert review services may be available at an additional cost.",
    },
    {
      q: "What types of applications do you support?",
      a: "We currently support Study Permits, Express Entry, Work Permits, and Family Sponsorship applications. More categories will be added based on user demand.",
    },
    {
      q: "Can I get legal immigration advice from DocRoute?",
      a: "No. DocRoute is a document organization tool, not a law firm. For legal advice, please consult a licensed Regulated Canadian Immigration Consultant (RCIC) or immigration lawyer.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-slate-900 text-white" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-750 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg pr-8">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}