'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Welcome to Echo",
    description: "Transform your text into engaging podcasts with AI. Let's get started!",
    icon: "/assets/welcome.svg"
  },
  {
    title: "Write Naturally",
    description: "Simply write or paste your text. Our AI understands natural language.",
    icon: "/assets/write.svg"
  },
  {
    title: "Choose Your Voice",
    description: "Select from a variety of AI voices or create your own custom voice.",
    icon: "/assets/voice.svg"
  },
  {
    title: "Add Effects",
    description: "Enhance your podcast with background music and sound effects.",
    icon: "/assets/effects.svg"
  }
];

export default function OnboardingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="relative">
        <div className="flex items-center justify-center mb-6">
          <img 
            src={slides[currentSlide].icon} 
            alt={slides[currentSlide].title}
            className="w-48 h-48"
          />
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">
            {slides[currentSlide].title}
          </h3>
          <p className="text-gray-600">
            {slides[currentSlide].description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
} 