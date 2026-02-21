import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

export default function TryUs(): JSX.Element {
  return (
    <div className="bg-gray-100 px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:p-10">
      <SectionTitle title="Try Us" classes="mb-4 sm:mb-5" />
      <p className="mx-auto mb-8 max-w-xl text-base text-gray-600 sm:mb-10 sm:text-lg">
        Experience the power of our AI-driven illegal dumping detection system. Try our demo and see
        how we can help you combat illegal dumping effectively.
      </p>
      <Link
        to="/demo"
        className="inline-block rounded-lg bg-green-500 px-8 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-green-600 hover:shadow-md active:scale-95 sm:text-lg"
      >
        Try the Demo
      </Link>
    </div>
  );
}
