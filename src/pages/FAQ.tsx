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
    <div className="bg-gray-100 p-10 text-center font-sans">
      <SectionTitle title="FAQ" classes="mb-5" />
      <div className="mx-auto max-w-xl">
        {FAQS.map((faq, index) => (
          <div key={faq.question} className="mb-4">
            <button
              type="button"
              className="w-full rounded-lg border bg-white p-4 text-left shadow-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <div className="flex items-center justify-between">
                <span>{faq.question}</span>
                <span aria-hidden="true">{activeIndex === index ? "−" : "+"}</span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="rounded-b-lg border border-t-0 bg-gray-100 p-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
