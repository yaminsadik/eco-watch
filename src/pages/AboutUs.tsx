import SectionTitle from "@components/Home/SectionTitle";

export default function AboutUs(): JSX.Element {
  return (
    <div className="min-h-[60vh] bg-gray-100 px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:py-20">
      <SectionTitle title="About Us" classes="mb-6" />
      <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
        We are a dedicated team of professionals committed to providing top-quality services and
        solutions. Our mission is to drive innovation and deliver exceptional value to our clients.
        With years of experience in the industry, we strive to exceed expectations and achieve
        excellence in everything we do.
      </p>
    </div>
  );
}
