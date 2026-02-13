import type { TimePeriodInfo, Language } from '../../types';
import type { SpeechContent } from '../../types';
import { getContent } from '../../data/content';
import './TimePeriodButton.css';

interface TimePeriodButtonProps {
  period: TimePeriodInfo;
  language: Language;
  dayName: string;
  activeKey: string | null;
  onPlay: (content: SpeechContent, key: string) => void;
  onStop: () => void;
}

export function TimePeriodButton({
  period,
  language,
  dayName,
  activeKey,
  onPlay,
  onStop,
}: TimePeriodButtonProps) {
  const key = `${dayName}-${period.id}`;
  const isPlaying = activeKey === key;

  const handleClick = () => {
    if (isPlaying) {
      onStop();
    } else {
      const content = getContent(language, period.id);
      onPlay(content, key);
    }
  };

  const accentClass = `period-btn--${period.id}`;

  return (
    <button
      className={`period-btn ${accentClass} ${isPlaying ? 'period-btn--playing' : ''}`}
      onClick={handleClick}
      title={isPlaying ? 'Stop' : `Play ${period.label}`}
    >
      <span className="period-btn__icon">{period.icon}</span>
      <span className="period-btn__label">{period.label}</span>
      <span className="period-btn__action">{isPlaying ? '⏹' : '▶'}</span>
    </button>
  );
}
