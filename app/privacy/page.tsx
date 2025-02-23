import Link from "next/link";
import { ArrowLeft, AudioWaveformIcon } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-1">
          <AudioWaveformIcon className="w-6 h-6 text-indigo-600" />
          <span className="font-display font-bold text-xl text-black">echo</span>
        </Link>
        <Link 
          href="/"
          className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to home
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information to provide better services to our users, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Account information (email, name, preferences)</li>
                <li>Usage data (how you use our services)</li>
                <li>Content data (podcasts, scripts, and other content you create)</li>
                <li>Technical data (device information, IP address)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Improve and develop new features</li>
                <li>Personalize your experience</li>
                <li>Communicate with you about our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Storage and Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information. Your data 
                is stored securely and we regularly review our security practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. AI and Data Processing</h2>
              <p className="text-gray-600 mb-4">
                Our AI services process your content to provide features like voice generation and content 
                optimization. This data is processed securely and in accordance with our privacy standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@echo.com" className="text-indigo-600 hover:text-indigo-700">
                  privacy@echo.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 