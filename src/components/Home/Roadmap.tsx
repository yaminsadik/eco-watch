import SectionTitle from "./SectionTitle";
import type { RoadmapEvent } from "@app-types/index";

const EVENTS: RoadmapEvent[] = [
  {
    date: "March 2024",
    description:
      "Conducted research to understand the extent of illegal dumping and current detection methods.",
  },
  {
    date: "April 2024",
    description:
      "Designed the overall system architecture, including hardware and software components.",
  },
  {
    date: "May 2024",
    description: "Gathered training data from different scenarios and locations.",
  },
  {
    date: "June 2024",
    description: "Deployed an initial model and conducted tests on real-life footage.",
  },
  {
    date: "July 2024",
    description:
      "Released version 1.0 of the system, deployed a high-quality first release, and conducted a market validation test to gather feedback and identify areas for improvement.",
  },
];

export default function Roadmap(): JSX.Element {
  return (
    <div className="px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:p-10">
      <SectionTitle title="Project Roadmap" />
      <p className="mx-auto mb-10 mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
        The objective of this project is to develop a drone-based system to detect illegal dumping
        and litter using AI and alert the authorities.
      </p>

      {/* ── Mobile: single left-aligned column ── */}
      <div className="relative block pl-6 md:hidden">
        {/* Vertical spine anchored to the left */}
        <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200" />
        {EVENTS.map((event) => (
          <div key={event.date} className="relative mb-8 last:mb-0">
            {/* Dot on spine */}
            <div className="absolute -left-[18px] top-5 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow" />
            <div className="rounded-lg bg-white p-5 text-left shadow-md">
              <h3 className="mb-1 font-bold text-gray-800">{event.date}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop: alternating centre-spine layout ── */}
      <div className="relative mx-auto hidden max-w-4xl md:block">
        {/* Centre spine */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />
        {EVENTS.map((event, index) => (
          <div
            key={event.date}
            className={`mb-10 flex w-full items-center last:mb-0 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2 px-6">
              <div className="rounded-lg bg-white p-6 text-left shadow-md">
                <h3 className="mb-2 text-lg font-bold text-gray-800">{event.date}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
              </div>
            </div>
            {/* Dot */}
            <div className="flex w-8 shrink-0 justify-center">
              <div className="h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
