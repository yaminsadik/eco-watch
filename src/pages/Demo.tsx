import SectionTitle from "@components/Home/SectionTitle";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: "📡",
    title: "Live Detection",
    description: "Real-time AI-powered identification of illegal dumping from drone footage.",
  },
  {
    icon: "🔔",
    title: "Alert System",
    description: "Instant notifications to authorities when dumping events are detected.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Visualise hotspots, trends, and cleanup progress across monitored regions.",
  },
];

export default function Demo(): JSX.Element {
  return (
    <div className="min-h-[60vh] px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:py-20">
      <SectionTitle title="Demo" classes="mb-6" />
      <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
        Welcome to the demo of our AI-driven illegal dumping detection system. Explore the features
        and see how our solution can help you.
      </p>

      {/* Coming soon banner */}
      <div className="mx-auto mb-10 max-w-md rounded-xl border border-green-200 bg-green-50 px-6 py-8">
        <span className="mb-3 block text-5xl">🚧</span>
        <h2 className="mb-2 text-xl font-bold text-gray-800">Live Demo Coming Soon</h2>
        <p className="text-sm text-gray-600">
          We&apos;re putting the finishing touches on the interactive experience. Check back shortly!
        </p>
      </div>

      {/* Feature preview cards */}
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="card text-left opacity-80">
            <span className="mb-3 block text-3xl">{feature.icon}</span>
            <h3 className="mb-2 text-base font-bold text-gray-800">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
