import { NextResponse } from 'next/server';

// ElevenLabs API endpoint
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1/text-to-speech';

export async function POST(req: Request) {
  try {
    const { text, voiceId } = await req.json();
    
    if (!text || !voiceId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // For development, always return a sample audio
    console.log('Using sample audio for development');
    return NextResponse.json({ 
      audioUrl: 'https://audio-samples.github.io/samples/mp3/blizzard_biased/sample-1.mp3' 
    });
    
    // The code below is commented out until we resolve the API connectivity issues
    /*
    // Get API key from environment variable
    const apiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }
    
    // Call ElevenLabs API
    const response = await fetch(`${ELEVENLABS_API_URL}/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('ElevenLabs API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate audio' },
        { status: response.status }
      );
    }
    
    // Get audio data
    const audioBuffer = await response.arrayBuffer();
    
    // Convert to base64 for easy transfer
    const base64Audio = Buffer.from(audioBuffer).toString('base64');
    const audioUrl = `data:audio/mpeg;base64,${base64Audio}`;
    
    return NextResponse.json({ audioUrl });
    */
  } catch (error) {
    console.error('Error in text-to-speech API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 