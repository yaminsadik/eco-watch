import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

export default function TryUs(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:p-10">
      {/* Eco leaf icon */}
      <div className="mb-4 flex justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3C7 3 3 7 3 12c0 4 2.5 7.5 6 9l1-4c-2-1-3.5-3-3.5-5 0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1.5 4-3.5 5l1 4c3.5-1.5 6-5 6-9 0-5-4-9-9-9Z"
            />
          </svg>
        </span>
      </div>
      <SectionTitle title="Try Us" classes="mb-4 sm:mb-5" />
      <p className="mx-auto mb-8 max-w-xl text-base text-gray-600 sm:mb-10 sm:text-lg">
        Experience the power of our AI-driven illegal dumping detection system. Try our demo and see
        how we can help you combat illegal dumping effectively.
      </p>
      <Link to="/demo" className="btn-primary text-base sm:text-lg">
        Try the Demo →
      </Link>
    </div>
  );
}
