import { useState, useEffect, useCallback, useRef } from 'react';
import type { SpeechContent, PlaybackState } from '../types';

function selectVoice(langTag: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  const exactMatch = voices.filter((v) => v.lang === langTag);
  const cloudVoice = exactMatch.find((v) => !v.localService);
  if (cloudVoice) return cloudVoice;
  if (exactMatch.length > 0) return exactMatch[0];

  const prefix = langTag.split('-')[0];
  const prefixMatch = voices.find((v) => v.lang.startsWith(prefix));
  if (prefixMatch) return prefixMatch;

  return null;
}

export function useSpeechSynthesis() {
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [totalSegments, setTotalSegments] = useState(0);
  const [voicesReady, setVoicesReady] = useState(false);

  const contentRef = useRef<SpeechContent | null>(null);
  const segmentIndexRef = useRef(0);

  // Load voices
  useEffect(() => {
    const handleVoices = () => setVoicesReady(true);
    window.speechSynthesis.addEventListener('voiceschanged', handleVoices);
    if (window.speechSynthesis.getVoices().length > 0) setVoicesReady(true);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', handleVoices);
  }, []);

  // Chrome long-speech workaround: pause/resume every 12s to prevent cutoff
  useEffect(() => {
    if (playbackState !== 'playing') return;
    const interval = setInterval(() => {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 12000);
    return () => clearInterval(interval);
  }, [playbackState]);

  const speakSegment = useCallback((content: SpeechContent, index: number) => {
    if (index >= content.segments.length) {
      setPlaybackState('idle');
      setActiveKey(null);
      contentRef.current = null;
      return;
    }

    segmentIndexRef.current = index;
    setCurrentSegmentIndex(index);
    setPlaybackState('playing');

    const utterance = new SpeechSynthesisUtterance(content.segments[index]);
    utterance.lang = content.lang;
    utterance.rate = content.lang.startsWith('zh') ? 0.85 : 0.9;
    utterance.pitch = 1.0;

    const voice = selectVoice(content.lang);
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      setTimeout(() => speakSegment(content, index + 1), 500);
    };

    utterance.onerror = (e) => {
      if (e.error === 'canceled') return;
      console.error('Speech error:', e);
      setPlaybackState('idle');
      setActiveKey(null);
      contentRef.current = null;
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const speak = useCallback((content: SpeechContent, key: string) => {
    window.speechSynthesis.cancel();
    contentRef.current = content;
    setActiveKey(key);
    setTotalSegments(content.segments.length);
    speakSegment(content, 0);
  }, [speakSegment]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaybackState('idle');
    setActiveKey(null);
    contentRef.current = null;
  }, []);

  return {
    playbackState,
    activeKey,
    currentSegmentIndex,
    totalSegments,
    voicesReady,
    speak,
    stop,
  };
}
