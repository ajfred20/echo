import Link from "next/link";
import { ArrowLeft, AudioWaveformIcon } from "lucide-react";

export default function Terms() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Echo. By using our service, you agree to these terms. Please read them carefully.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Using our Services</h2>
              <p className="text-gray-600 mb-4">
                You must follow any policies made available to you within the Services. You may use our 
                Services only as permitted by law. We may suspend or stop providing our Services to you 
                if you do not comply with our terms or policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Content Creation and Rights</h2>
              <p className="text-gray-600 mb-4">
                When you upload, submit, store, send or receive content to or through our Services, you 
                give Echo a worldwide license to use, host, store, reproduce, modify, create derivative 
                works, communicate, publish, publicly perform, publicly display and distribute such content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. AI Usage and Limitations</h2>
              <p className="text-gray-600 mb-4">
                Our AI services are provided "as is." You understand that the AI-generated content may not 
                be perfect and you are responsible for reviewing and editing any AI-generated content 
                before publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Account Security</h2>
              <p className="text-gray-600 mb-4">
                You are responsible for safeguarding the password that you use to access the Services and 
                for any activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-600 mb-4">
                Echo may terminate or suspend your access to all or part of the Services for any reason, 
                including, but not limited to, breach of these Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 