import SectionTitle from "@components/Home/SectionTitle";

export default function Demo(): JSX.Element {
  return (
    <div className="p-10 text-center font-sans">
      <SectionTitle title="Demo" classes="mb-5" />
      <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600">
        Welcome to the demo of our AI-driven illegal dumping detection system. Explore the features
        and see how our solution can help you.
      </p>
      {/* Demo content coming soon */}
    </div>
  );
}
