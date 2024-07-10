import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import how_1 from "../../assets/how_1.webp";
import how_2 from "../../assets/how_2.webp";
import how_3 from "../../assets/how_3.webp";
import how_4 from "../../assets/how_4.webp";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "Automated Drone Surveillance",
    text: "Our drones conduct automated surveillance of the designated areas, capturing real-time footage. This ensures comprehensive coverage and timely data collection.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "Footage Analysis with AI and Machine Learning",
    text: "The captured footage is processed through our advanced object detection AI algorithm, leveraging machine learning to accurately identify objects of interest.",
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

export default function HowItWorks() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="how it works" />
        <div className="bg-[#3A5FCD] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
