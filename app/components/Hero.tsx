"use client";

export default function Hero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToChecklist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const checklistSection = document.getElementById("checklist");
    if (checklistSection) {
      checklistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="py-20 px-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
      aria-labelledby="hero-title"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Prepare Your IRCC Documents
            <br />
            Without Stress or Confusion
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Applying to Canada is stressful — especially when document requirements change based on your profile. 
            DocRoute helps you organize everything clearly before you submit to IRCC.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#checklist"
              onClick={scrollToChecklist}
              className="bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              aria-label="Get free IRCC document checklist"
            >
              Get Free Document Checklist
            </a>

            <a
              href="#form"
              onClick={scrollToForm}
              className="border border-slate-400 text-white px-6 py-3.5 rounded-lg hover:bg-slate-700 transition-colors"
              aria-label="Join early access program"
            >
              Join Early Access
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-80 bg-slate-700/50 rounded-2xl flex items-center justify-center border border-slate-600">
            {/* Placeholder for hero image */}
            <svg 
              className="w-32 h-32 text-slate-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}