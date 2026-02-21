import SectionTitle from "@components/Home/SectionTitle";

export default function AboutUs(): JSX.Element {
  return (
    <div className="bg-gray-100 p-10 text-center font-sans">
      <SectionTitle title="About Us" classes="mb-5" />
      <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600">
        We are a dedicated team of professionals committed to providing top-quality services and
        solutions. Our mission is to drive innovation and deliver exceptional value to our clients.
        With years of experience in the industry, we strive to exceed expectations and achieve
        excellence in everything we do.
      </p>
    </div>
  );
}
