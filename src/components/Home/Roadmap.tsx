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

      {/* ── Mobile: flex-based left-spine column ── */}
      <div className="block md:hidden">
        {EVENTS.map((event, index) => (
          <div key={event.date} className="flex gap-4 text-left">
            {/* Spine + dot column */}
            <div className="flex flex-col items-center">
              <div className="mt-[22px] h-3 w-3 shrink-0 rounded-full border-2 border-white bg-green-500 shadow" />
              {/* Connector line — hidden for last item */}
              {index < EVENTS.length - 1 && (
                <div className="mt-1 w-0.5 flex-1 bg-gray-200" />
              )}
            </div>
            {/* Card */}
            <div className={`flex-1 pb-8 ${index === EVENTS.length - 1 ? "pb-0" : ""}`}>
              <div className="rounded-lg bg-white p-5 shadow-md">
                <h3 className="mb-1 font-bold text-gray-800">{event.date}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop: 3-column alternating centre-spine layout ── */}
      <div className="relative mx-auto hidden max-w-4xl md:block">
        {/* Centre spine — sits behind everything */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />

        {EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={event.date} className="mb-10 flex w-full items-center last:mb-0">
              {/* Left slot */}
              <div className="w-5/12 px-6 text-right">
                {!isEven && (
                  <div className="rounded-lg bg-white p-6 text-left shadow-md">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">{event.date}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
                  </div>
                )}
              </div>

              {/* Centre dot */}
              <div className="flex w-2/12 justify-center">
                <div className="z-10 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow" />
              </div>

              {/* Right slot */}
              <div className="w-5/12 px-6 text-left">
                {isEven && (
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">{event.date}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
