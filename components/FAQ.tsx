interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  accentColor?: string;
}

export function FAQ({ faqs, accentColor = "violet" }: FAQProps) {
  // Generate FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const accentClasses: Record<string, { border: string; hover: string }> = {
    violet: { border: "hover:border-violet-500/50", hover: "text-violet-400" },
    green: { border: "hover:border-green-500/50", hover: "text-green-400" },
    blue: { border: "hover:border-blue-500/50", hover: "text-blue-400" },
    gold: { border: "hover:border-yellow-500/50", hover: "text-yellow-400" },
    purple: { border: "hover:border-purple-500/50", hover: "text-purple-400" },
    teal: { border: "hover:border-teal-500/50", hover: "text-teal-400" },
    orange: { border: "hover:border-orange-500/50", hover: "text-orange-400" },
    coral: { border: "hover:border-red-400/50", hover: "text-red-400" },
    silver: { border: "hover:border-slate-400/50", hover: "text-slate-300" },
    pink: { border: "hover:border-pink-500/50", hover: "text-pink-400" },
    lime: { border: "hover:border-lime-400/50", hover: "text-lime-400" },
  };

  const colors = accentClasses[accentColor] || accentClasses.violet;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 ${colors.border} transition-all`}
              >
                <h3 className={`text-lg font-semibold text-white mb-3`}>{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
