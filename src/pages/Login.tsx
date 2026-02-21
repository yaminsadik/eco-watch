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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-10 shadow-lg">
        <SectionTitle title="Login" classes="mb-5 text-center" />
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="mb-2 block text-left text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={fields.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-left text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={fields.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 text-white transition duration-300 hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
