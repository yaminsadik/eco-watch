import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

export default function TryUs(): JSX.Element {
  return (
    <div className="bg-gray-100 p-10 text-center font-sans">
      <SectionTitle title="Try Us" classes="mb-5" />
      <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600">
        Experience the power of our AI-driven illegal dumping detection system. Try our demo and see
        how we can help you combat illegal dumping effectively.
      </p>
      <Link
        to="/demo"
        className="rounded-lg bg-green-500 px-6 py-3 text-lg text-white transition duration-300 hover:bg-green-600"
      >
        Try the Demo
      </Link>
    </div>
  );
}
