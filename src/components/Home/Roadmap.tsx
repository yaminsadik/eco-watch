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
    <div className="p-10 text-center font-sans">
      <SectionTitle title="Project Roadmap" />
      <p className="mx-auto mb-10 mt-4 max-w-xl text-lg text-gray-600">
        The objective of this project is to develop a drone-based system to detect illegal dumping
        and litter using AI and alert the authorities.
      </p>
      <div className="relative mx-auto max-w-4xl">
        {/* Centre spine */}
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gray-300" />
        {EVENTS.map((event, index) => (
          <div
            key={event.date}
            className={`mb-10 flex w-full items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="w-full px-4 md:w-1/2">
              <div className="rounded bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-xl font-bold">{event.date}</h3>
                <p>{event.description}</p>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="flex w-1/2 justify-center md:w-5">
              <div className="h-3 w-3 rounded-full border-2 border-white bg-green-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
