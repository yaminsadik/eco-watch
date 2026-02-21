import Container from "@components/Container";
import SectionTitle from "./SectionTitle";
import how_1 from "@assets/how_1.webp";
import how_2 from "@assets/how_2.webp";
import how_3 from "@assets/how_3.webp";
import how_4 from "@assets/how_4.webp";
import type { HowItWorksItem } from "@app-types/index";

const ITEMS: HowItWorksItem[] = [
  {
    id: 1,
    icon: how_1,
    heading: "Automated Drone Surveillance",
    text: "Our drones conduct automated surveillance of designated areas, capturing real-time footage. This ensures comprehensive coverage and timely data collection.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "Footage Analysis with AI and Machine Learning",
    text: "Captured footage is processed through our advanced object detection AI algorithm, leveraging machine learning to accurately identify objects of interest.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Detection of Trash and Dumpings",
    text: "Our system accurately detects instances of trash and illegal dumping in the footage, highlighting these areas for further action.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "User Notification",
    text: "Users are promptly notified of any detected trash and dumping instances via our notification system, ensuring timely response and action.",
  },
];

export default function HowItWorks(): JSX.Element {
  return (
    <section className="my-12 sm:my-14 lg:my-20">
      <Container>
        <SectionTitle title="how it works" />
        <div className="mt-6 rounded-xl bg-[#3A5FCD]/20 px-4 py-10 sm:mt-8 sm:px-8 sm:py-14">
          <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center text-center"
              >
                <img
                  src={item.icon}
                  alt={item.heading}
                  className="mb-4 w-20 sm:w-24"
                />
                <h2 className="mb-3 text-base font-bold leading-snug sm:text-lg">{item.heading}</h2>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
