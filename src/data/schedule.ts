import type { DayOfWeek, Language, TimePeriodInfo, DaySchedule } from '../types';

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const DAY_LANGUAGE_MAP: Record<DayOfWeek, Language> = {
  Monday: 'english',
  Tuesday: 'chinese',
  Wednesday: 'french',
  Thursday: 'french',
  Friday: 'french',
  Saturday: 'french',
  Sunday: 'french',
};

export const LANGUAGE_LABELS: Record<Language, string> = {
  english: 'English',
  chinese: '\u4E2D\u6587 (Mandarin)',
  french: 'Fran\u00E7ais',
};

export const LANGUAGE_TAGS: Record<Language, string> = {
  english: 'en-US',
  chinese: 'zh-CN',
  french: 'fr-FR',
};

export const TIME_PERIODS: TimePeriodInfo[] = [
  { id: 'morning', label: 'Morning Wake Up', icon: '\uD83C\uDF05' },
  { id: 'story', label: 'Story Time', icon: '\uD83D\uDCD6' },
  { id: 'evening', label: 'Evening Wind Down', icon: '\uD83C\uDF19' },
];

export const WEEKLY_SCHEDULE: DaySchedule[] = DAYS_OF_WEEK.map((day) => ({
  day,
  language: DAY_LANGUAGE_MAP[day],
  languageLabel: LANGUAGE_LABELS[DAY_LANGUAGE_MAP[day]],
  periods: TIME_PERIODS,
}));
