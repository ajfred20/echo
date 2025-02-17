'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Dialog } from '@headlessui/react';

interface Feature {
  title: string;
  description: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  badge?: string;
}

interface FeatureShowcaseProps {
  additionalFeatures: Feature[];
}

export default function FeatureShowcase({ additionalFeatures }: FeatureShowcaseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-16 text-center">
        <button 
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 transition-all hover:-translate-y-0.5"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-sm font-medium text-indigo-600">
            And so much more
          </span>
          <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">
            <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
              More Powerful Features
            </Dialog.Title>
            
            <div className="grid md:grid-cols-2 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="relative p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="mt-8 px-5 py-2.5 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
} 