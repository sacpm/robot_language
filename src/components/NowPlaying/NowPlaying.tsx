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

  const [day, period] = activeKey.split('-');
  const periodLabels: Record<string, string> = {
    morning: 'Morning Wake Up',
    story: 'Story Time',
    evening: 'Evening Wind Down',
  };

  return (
    <div className="now-playing">
      <div className="now-playing__info">
        <span className="now-playing__waves">🔊</span>
        <span className="now-playing__text">
          {day} — {periodLabels[period] ?? period}
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
