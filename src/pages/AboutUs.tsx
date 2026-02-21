import SectionTitle from "@components/Home/SectionTitle";

interface ValueCard {
  icon: string;
  title: string;
  body: string;
}

const VALUES: ValueCard[] = [
  {
    icon: "💡",
    title: "Innovation",
    body: "Leveraging cutting-edge AI and drone technology to stay ahead of environmental challenges.",
  },
  {
    icon: "🌿",
    title: "Environmental Impact",
    body: "Every detection helps restore cleaner communities and protect ecosystems for future generations.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    body: "Committed to precision, reliability, and continuous improvement in everything we build.",
  },
];

export default function AboutUs(): JSX.Element {
  return (
    <div className="min-h-[60vh] bg-gray-100 px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="About Us" classes="mb-6" />
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
          We are a dedicated team of professionals committed to providing top-quality services and
          solutions. Our mission is to drive innovation and deliver exceptional value to our clients.
          With years of experience in the industry, we strive to exceed expectations and achieve
          excellence in everything we do.
        </p>

        {/* Value cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {VALUES.map((card) => (
            <div
              key={card.title}
              className="card text-left"
            >
              <span className="mb-3 block text-3xl">{card.icon}</span>
              <h3 className="mb-2 text-base font-bold text-gray-800 sm:text-lg">{card.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
