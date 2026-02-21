import Front from "@components/Home/Front";
import HowItWorks from "@components/Home/HowItWorks";
import Roadmap from "@components/Home/Roadmap";
import TryUs from "@components/Home/TryUs";

export default function Home(): JSX.Element {
  return (
    <>
      <Front />
      <HowItWorks />
      <Roadmap />
      <TryUs />
    </>
  );
}
