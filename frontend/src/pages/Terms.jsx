import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Terms and Conditions</h1>
        <p className="text-center text-gray-400 mt-2">
          Please read these terms and conditions carefully before using our services.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-300">
          Welcome to GISTChain. By accessing or using our platform, you agree to be bound by these terms and
          conditions. If you do not agree, you may not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>You must ensure that your account details are secure and confidential.</li>
          <li>You agree not to use the platform for any illegal or unauthorized purpose.</li>
          <li>You must provide accurate information when creating your account or deploying projects.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities</h2>
        <p className="text-gray-300">
          Users are strictly prohibited from engaging in the following activities:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Hacking, phishing, or other forms of malicious activity.</li>
          <li>Uploading viruses or malicious software.</li>
          <li>Infringing on intellectual property rights.</li>
          <li>Using the platform to spread misinformation or harmful content.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
        <p className="text-gray-300">
          All content on this platform, including text, graphics, logos, and code, is the property of GISTChain
          and is protected by intellectual property laws. Unauthorized use is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="text-gray-300">
          We are not responsible for any loss or damage arising from the use of our platform, including but not
          limited to technical issues, data breaches, or third-party misconduct.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
        <p className="text-gray-300">
          We value your privacy. Please review our <a href="/privacy-policy" className="text-purple-500 underline">Privacy Policy</a> to understand how we collect, use, and protect your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Amendments</h2>
        <p className="text-gray-300">
          We reserve the right to update these terms and conditions at any time. Changes will be effective
          immediately upon posting on this page. Please review this page regularly to stay informed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="text-gray-300">
          These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction.
          Any disputes arising will be resolved exclusively in the courts of your jurisdiction.
        </p>
      </section>

      <footer className="text-center mt-12">
        <p className="text-gray-400">
          If you have any questions about these terms, please contact us at <a href="mailto:support@gistchain.com" className="text-purple-500 underline">support@gistchain.com</a>.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
