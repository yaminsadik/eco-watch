// src/PrivacyPolicy.js
import React from 'react';
import SectionTitle from '../components/Home/SectionTitle';

const PrivacyPolicy = () => {
  return (
    <div className="text-center p-10 font-sans bg-gray-100">
      <SectionTitle title="Privacy Policy" classes="mb-5" />
      <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg text-gray-600 mb-4">
          We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data.
        </p>
        <h2 className="text-xl font-bold mb-2">Information Collection</h2>
        <p className="text-gray-600 mb-4">
          We collect information that you provide to us directly, such as when you create an account, fill out a form, or contact us for support. This information may include your name, email address, phone number, and any other details you choose to provide.
        </p>
        <h2 className="text-xl font-bold mb-2">Information Use</h2>
        <p className="text-gray-600 mb-4">
          We use your information to provide and improve our services, communicate with you, and enhance your experience. We may also use your information for marketing purposes with your consent.
        </p>
        <h2 className="text-xl font-bold mb-2">Information Sharing</h2>
        <p className="text-gray-600 mb-4">
          We do not share your personal information with third parties without your consent, except as required by law or to protect our rights and services.
        </p>
        <h2 className="text-xl font-bold mb-2">Data Security</h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is completely secure.
        </p>
        <h2 className="text-xl font-bold mb-2">Your Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to access, update, or delete your personal information. You can also object to the processing of your data or request that we restrict the processing of your information.
        </p>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or concerns about our privacy policy, please contact us at [your email address].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
