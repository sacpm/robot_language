import type { PlaybackState } from '../../types';
import './NowPlaying.css';

interface NowPlayingProps {
  activeKey: string | null;
  playbackState: PlaybackState;
  currentSegment: number;
  totalSegments: number;
  onStop: () => void;
}

export function NowPlaying({
  activeKey,
  playbackState,
  currentSegment,
  totalSegments,
  onStop,
}: NowPlayingProps) {
  if (playbackState === 'idle' || !activeKey) return null;

  // Handle interactive buttons (interactive-counting, interactive-alphabet)
  const interactiveLabels: Record<string, string> = {
    'interactive-counting': 'Counting to 20 in French',
    'interactive-alphabet': 'Alphabet in French',
  };

  let label: string;
  if (interactiveLabels[activeKey]) {
    label = interactiveLabels[activeKey];
  } else if (activeKey.startsWith('color-')) {
    const colorName = activeKey.replace('color-', '');
    label = `Color — ${colorName.charAt(0).toUpperCase() + colorName.slice(1)}`;
  } else {
    const [day, period] = activeKey.split('-');
    const periodLabels: Record<string, string> = {
      morning: 'Morning Wake Up',
      story: 'Story Time',
      evening: 'Evening Wind Down',
    };
    label = `${day} — ${periodLabels[period] ?? period}`;
  }

  return (
    <div className="now-playing">
      <div className="now-playing__info">
        <span className="now-playing__waves">🔊</span>
        <span className="now-playing__text">
          {label}
        </span>
        <span className="now-playing__progress">
          {currentSegment + 1} / {totalSegments}
        </span>
      </div>
      <button className="now-playing__stop" onClick={onStop} title="Stop">
        ⏹ Stop
      </button>
    </div>
  );
}
