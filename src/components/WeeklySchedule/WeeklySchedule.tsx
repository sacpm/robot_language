import type { DayOfWeek, SpeechContent } from '../../types';
import { WEEKLY_SCHEDULE } from '../../data/schedule';
import { DayCard } from '../DayCard/DayCard';
import './WeeklySchedule.css';

interface WeeklyScheduleProps {
  currentDay: DayOfWeek;
  activeKey: string | null;
  onPlay: (content: SpeechContent, key: string) => void;
  onStop: () => void;
}

export function WeeklySchedule({ currentDay, activeKey, onPlay, onStop }: WeeklyScheduleProps) {
  return (
    <div className="weekly-schedule">
      {WEEKLY_SCHEDULE.map((schedule) => (
        <DayCard
          key={schedule.day}
          schedule={schedule}
          isToday={schedule.day === currentDay}
          activeKey={activeKey}
          onPlay={onPlay}
          onStop={onStop}
        />
      ))}
    </div>
  );
}
