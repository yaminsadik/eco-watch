import { useState } from "react";
import SectionTitle from "@components/Home/SectionTitle";
import type { ContactFields } from "@app-types/index";

export default function ContactUs(): JSX.Element {
  const [fields, setFields] = useState<ContactFields>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (fields.name && fields.email && fields.message) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base";

  return (
    <div className="min-h-[60vh] bg-gray-100 px-4 py-12 text-center font-sans sm:px-6 sm:py-16 md:py-20">
      <SectionTitle title="Contact Us" classes="mb-6" />
      {submitted ? (
        <div className="mx-auto max-w-sm rounded-xl bg-white p-8 shadow-md">
          <p className="text-lg font-medium text-green-600">
            Thank you for contacting us!
          </p>
          <p className="mt-2 text-sm text-gray-500">We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md sm:p-8"
          noValidate
        >
          <div className="mb-5">
            <label className="mb-1.5 block text-left text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className={inputClass}
              value={fields.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-left text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className={inputClass}
              value={fields.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 block text-left text-sm font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={inputClass}
              value={fields.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-green-600 hover:shadow-md active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
