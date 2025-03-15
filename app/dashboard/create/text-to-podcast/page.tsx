'use client';

import { useState, useRef } from 'react';
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import { Mic2, Play, Pause, RotateCcw, Download, Save, Wand2 } from "lucide-react";

// ElevenLabs voice options
const voiceOptions = [
  { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel (Female)', accent: 'American' },
  { id: 'AZnzlk1XvdvUeBnXmlld', name: 'Domi (Male)', accent: 'American' },
  { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Bella (Female)', accent: 'British' },
  { id: 'ErXwobaYiN019PkySvjV', name: 'Antoni (Male)', accent: 'American' },
  { id: 'MF3mGyEYCl7XYWbV9V6O', name: 'Elli (Female)', accent: 'American' },
  { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Josh (Male)', accent: 'American' },
];

export default function TextToPodcast() {
  const { user, isLoaded } = useUser();
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(voiceOptions[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  if (!isLoaded) return null;
  if (!user) redirect('/login');

  const handleGenerate = async () => {
    if (!text) return;
    
    setIsGenerating(true);
    setError('');
    
    try {
      // Call our API route that will communicate with ElevenLabs
      const response = await fetch('/api/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          voiceId: selectedVoice,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate audio');
      }
      
      const data = await response.json();
      setAudioUrl(data.audioUrl);
    } catch (err) {
      console.error('Error generating audio:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setText('');
    setAudioUrl('');
    setIsPlaying(false);
    setError('');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleDownload = () => {
    if (!audioUrl) return;
    
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `podcast-${new Date().toISOString().slice(0, 10)}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Text to Podcast
          </h1>
          <p className="text-gray-600 mb-8">
            Transform your text into a professional podcast with AI-powered voices
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
            <div className="mb-6">
              <label htmlFor="podcast-text" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your text
              </label>
              <textarea
                id="podcast-text"
                rows={8}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Type or paste your podcast script here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <p className="mt-2 text-sm text-gray-500">
                {text.length} characters ({Math.ceil(text.length / 1000)} credits)
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="voice-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select a voice
              </label>
              <div className="relative">
                <select
                  id="voice-select"
                  className="w-full appearance-none px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors pr-10"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                >
                  {voiceOptions.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name} - {voice.accent}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mic2 className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleGenerate}
                disabled={!text || isGenerating}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    Generate Podcast
                  </>
                )}
              </button>
            </div>
          </div>

          {audioUrl && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Your Generated Podcast
              </h2>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlayPause}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
                  </button>
                  <div>
                    <p className="font-medium text-gray-900">Podcast</p>
                    <p className="text-sm text-gray-500">Generated with {voiceOptions.find(v => v.id === selectedVoice)?.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Download"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Save to projects"
                  >
                    <Save className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="w-full bg-gray-100 rounded-lg p-4">
                <audio 
                  ref={audioRef} 
                  src={audioUrl} 
                  onEnded={() => setIsPlaying(false)} 
                  controls 
                  className="w-full" 
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 