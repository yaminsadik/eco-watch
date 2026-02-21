import SectionTitle from "@components/Home/SectionTitle";

interface PolicySection {
  heading: string;
  body: string;
}

const SECTIONS: PolicySection[] = [
  {
    heading: "Information Collection",
    body: "We collect information that you provide to us directly, such as when you create an account, fill out a form, or contact us for support. This information may include your name, email address, phone number, and any other details you choose to provide.",
  },
  {
    heading: "Information Use",
    body: "We use your information to provide and improve our services, communicate with you, and enhance your experience. We may also use your information for marketing purposes with your consent.",
  },
  {
    heading: "Information Sharing",
    body: "We do not share your personal information with third parties without your consent, except as required by law or to protect our rights and services.",
  },
  {
    heading: "Data Security",
    body: "We implement security measures to protect your data from unauthorised access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is completely secure.",
  },
  {
    heading: "Your Rights",
    body: "You have the right to access, update, or delete your personal information. You can also object to the processing of your data or request that we restrict the processing of your information.",
  },
  {
    heading: "Contact Us",
    body: "If you have any questions or concerns about our privacy policy, please contact us via the Contact Us page.",
  },
];

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="bg-gray-100 p-10 text-center font-sans">
      <SectionTitle title="Privacy Policy" classes="mb-5" />
      <div className="mx-auto max-w-4xl text-left">
        <p className="mb-4 text-lg text-gray-600">
          We value your privacy and are committed to protecting your personal information. This
          privacy policy outlines how we collect, use, and safeguard your data.
        </p>
        {SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-2 text-xl font-bold">{section.heading}</h2>
            <p className="mb-4 text-gray-600">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
