import SectionTitle from "@components/Home/SectionTitle";

export default function Demo(): JSX.Element {
  return (
    <div className="min-h-[60vh] px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:py-20">
      <SectionTitle title="Demo" classes="mb-6" />
      <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
        Welcome to the demo of our AI-driven illegal dumping detection system. Explore the features
        and see how our solution can help you.
      </p>
      {/* Demo content coming soon */}
    </div>
  );
}
