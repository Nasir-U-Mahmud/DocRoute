// components/FAQ.js
"use client";

import { useState } from "react";

const faqs = [
  { q: "Is this immigration advice?", a: "No. We help organize documents. For legal advice consult a licensed consultant." },
  { q: "Is my data secure?", a: "Yes. Files are encrypted in transit and at rest on our hosting provider." },
  { q: "How do I get the checklist?", a: "Submit the form and you'll be redirected to the checklist PDF." },
];

export default function FAQ() {
  return (
    <div>
      {faqs.map((f, i) => (
        <details key={i}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
