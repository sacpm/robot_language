import type { DaySchedule, SpeechContent } from '../../types';
import { TimePeriodButton } from '../TimePeriodButton/TimePeriodButton';
import './DayCard.css';

interface DayCardProps {
  schedule: DaySchedule;
  isToday: boolean;
  activeKey: string | null;
  onPlay: (content: SpeechContent, key: string) => void;
  onStop: () => void;
}

const LANGUAGE_FLAGS: Record<string, string> = {
  english: '🇬🇧',
  chinese: '🇨🇳',
  french: '🇫🇷',
};

export function DayCard({ schedule, isToday, activeKey, onPlay, onStop }: DayCardProps) {
  return (
    <div className={`day-card ${isToday ? 'day-card--today' : ''}`}>
      {isToday && <div className="day-card__today-badge">TODAY</div>}
      <h2 className="day-card__day">{schedule.day}</h2>
      <div className="day-card__language">
        <span className="day-card__flag">{LANGUAGE_FLAGS[schedule.language]}</span>
        {schedule.languageLabel}
      </div>
      <div className="day-card__periods">
        {schedule.periods.map((period) => (
          <TimePeriodButton
            key={period.id}
            period={period}
            language={schedule.language}
            dayName={schedule.day}
            activeKey={activeKey}
            onPlay={onPlay}
            onStop={onStop}
          />
        ))}
      </div>
    </div>
  );
}
