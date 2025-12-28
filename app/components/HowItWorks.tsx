export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Answer simple questions about your application type, funding source, and sponsor.",
    },
    {
      number: 2,
      title: "Upload Documents",
      description: "Upload your files. We tell you exactly what documents are required for your specific case.",
    },
    {
      number: 3,
      title: "Download IRCC-Ready Files",
      description: "Your documents are automatically renamed, resized, and combined — ready to upload to IRCC.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-slate-900 text-white" aria-labelledby="how-title">
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="how-title" className="text-3xl md:text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white text-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}