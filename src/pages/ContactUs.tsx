import { useState } from "react";
import SectionTitle from "@components/Home/SectionTitle";
import type { ContactFields } from "@app-types/index";

export default function ContactUs(): JSX.Element {
  const [fields, setFields] = useState<ContactFields>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (fields.name && fields.email && fields.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-gray-100 p-10 text-center font-sans">
      <SectionTitle title="Contact Us" classes="mb-5" />
      {submitted ? (
        <p className="text-lg text-green-600">
          Thank you for contacting us! We&apos;ll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg"
          noValidate
        >
          <div className="mb-4">
            <label className="mb-2 block text-left text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={fields.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-left text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={fields.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-left text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={fields.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 text-white transition duration-300 hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
