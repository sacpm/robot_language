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
  /** Pause in ms between short segments (< 40 chars). Defaults to 150. */
  shortPauseMs?: number;
  /** Override speech rate for this content. Defaults to 0.9 (or 0.85 for Chinese). */
  rate?: number;
}

export type PlaybackState = 'idle' | 'playing';
