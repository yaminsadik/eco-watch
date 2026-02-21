import { useState } from "react";
import SectionTitle from "@components/Home/SectionTitle";
import type { FaqItem } from "@app-types/index";

const FAQS: FaqItem[] = [
  {
    question: "What is your main service?",
    answer:
      "Our main service is providing AI-driven solutions for detecting illegal dumping using drones.",
  },
  {
    question: "How can we contact you?",
    answer: "You can contact us through the Contact Us page on our website.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve clients globally, with a focus on regions facing significant illegal dumping issues.",
  },
];

export default function FAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-[60vh] bg-gray-100 px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:py-20">
      <SectionTitle title="FAQ" classes="mb-6" />
      <div className="mx-auto max-w-xl">
        {FAQS.map((faq, index) => {
          const open = activeIndex === index;
          return (
            <div key={faq.question} className="mb-3">
              <button
                type="button"
                className={`w-full border bg-white px-5 py-4 text-left shadow-sm transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-button-primary focus:ring-offset-1 ${
                  open ? "rounded-t-lg" : "rounded-lg"
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={open}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {/* Animated chevron */}
                  <svg
                    className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Smooth open/close using CSS grid-rows transition */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="rounded-b-lg border border-t-0 bg-white px-5 py-4 text-left shadow-sm">
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
