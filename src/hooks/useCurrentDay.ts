import type { DayOfWeek } from '../types';

const DAYS: DayOfWeek[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function useCurrentDay(): DayOfWeek {
  return DAYS[new Date().getDay()];
}
