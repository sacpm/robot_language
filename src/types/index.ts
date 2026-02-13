export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type Language = 'english' | 'chinese' | 'french';

export type TimePeriod = 'morning' | 'story' | 'evening';

export interface TimePeriodInfo {
  id: TimePeriod;
  label: string;
  icon: string;
}

export interface DaySchedule {
  day: DayOfWeek;
  language: Language;
  languageLabel: string;
  periods: TimePeriodInfo[];
}

export interface SpeechContent {
  segments: string[];
  lang: string;
}

export type PlaybackState = 'idle' | 'playing';
