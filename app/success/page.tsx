import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You! — DocRoute",
  description: "Your IRCC document checklist is ready.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center px-5">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Thank You for Joining!
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
          Your IRCC document checklist has been sent to your email. 
          You can also download it directly below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/checklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Download Your Checklist
          </a>

          <Link
            href="/"
            className="inline-block border border-slate-400 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* What's Next Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">What&apos;s Next?</h2>
          
          <div className="space-y-4 text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">1.</span>
              <p>Review the checklist to understand which documents you need</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">2.</span>
              <p>Start gathering your documents according to your specific profile</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">3.</span>
              <p>Watch your email for updates about our document preparation platform</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">4.</span>
              <p>Once launched, you&apos;ll be among the first to use our automated document organizer</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Have questions? Contact us at{" "}
          <a
            href="mailto:hello.doc.route@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            hello.doc.route@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}