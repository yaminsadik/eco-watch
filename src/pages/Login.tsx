import { useState } from "react";
import SectionTitle from "@components/Home/SectionTitle";
import type { LoginFields } from "@app-types/index";

export default function Login(): JSX.Element {
  const [fields, setFields] = useState<LoginFields>({ username: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!fields.username || !fields.password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    // TODO: replace with real authentication call
    alert(`Welcome, ${fields.username}!`);
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base";

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-100 px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg sm:p-10">
        {/* Welcome icon */}
        <div className="mb-4 flex justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-7 w-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
        </div>
        <SectionTitle title="Login" classes="mb-1 text-center" />
        <p className="mb-6 text-center text-sm text-gray-500">Sign in to your dashboard</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              className={inputClass}
              value={fields.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className={inputClass}
              value={fields.password}
              onChange={handleChange}
            />
          </div>
          {error && (
            <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-green-500 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-600 hover:shadow-md active:scale-[0.98]"
          >
            Login
          </button>
          <p className="mt-4 text-center text-sm text-gray-500">
            <button
              type="button"
              className="text-green-600 underline-offset-2 hover:underline focus:outline-none"
              onClick={() => alert("Password reset coming soon.")}
            >
              Forgot password?
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
