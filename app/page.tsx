import Hero from "./components/Hero";
import LeadForm from "./components/LeadForm";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AnalyticsDebug from "./components/AnalyticsDebug";

export default function Home() {
  return (
    <main>
      {process.env.NODE_ENV === "development" && <AnalyticsDebug />}
      <Hero />
      {/* ... rest of your components */}
    </main>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section id="form" className="py-16 px-5 bg-slate-900 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Your Free IRCC Document Checklist
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Enter your details below and receive a comprehensive checklist tailored to your immigration needs.
        </p>
        <LeadForm />
      </section>

      <ProblemSection />
      
      <HowItWorks />

      <section id="checklist" className="py-20 px-5 bg-gradient-to-br from-slate-900 to-slate-800 text-center text-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Start With Clarity
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Download a free, expert-designed checklist to understand exactly which documents you need — before you apply.
        </p>
        <a
          href="/checklist.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Download Free IRCC Checklist
        </a>
      </section>

      <div className="h-16 bg-slate-50"></div>

      <section className="py-8 px-5 bg-slate-50 text-slate-600 text-sm text-center">
        <p className="max-w-4xl mx-auto">
          DocRoute is not affiliated with IRCC or the Government of Canada. We help applicants organize documents. 
          For legal advice, consult a licensed immigration professional. We do not promise approvals — we help you 
          submit complete, well-organized applications.
        </p>
      </section>

      <section className="py-20 px-5 bg-gradient-to-br from-slate-800 to-slate-900 text-center text-white flex flex-col items-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Prepare Your IRCC Documents the Right Way?
        </h2>
        <p className="text-slate-300 max-w-2xl">
          Join early access and be the first to use automated document preparation for Canada immigration.
        </p>
        <a
          href="#form"
          className="bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Join Early Access
        </a>
      </section>

      <Features />
      
      <FAQ />
      
      <Footer />
    </main>
  );
}