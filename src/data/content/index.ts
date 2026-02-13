import type { Language, TimePeriod, SpeechContent } from '../../types';

import { morningContent as enMorning } from './english/morning';
import { storyContent as enStory } from './english/story';
import { eveningContent as enEvening } from './english/evening';

import { morningContent as zhMorning } from './chinese/morning';
import { storyContent as zhStory } from './chinese/story';
import { eveningContent as zhEvening } from './chinese/evening';

import { morningContent as frMorning } from './french/morning';
import { storyContent as frStory } from './french/story';
import { eveningContent as frEvening } from './french/evening';

const CONTENT_MAP: Record<Language, Record<TimePeriod, SpeechContent>> = {
  english: { morning: enMorning, story: enStory, evening: enEvening },
  chinese: { morning: zhMorning, story: zhStory, evening: zhEvening },
  french: { morning: frMorning, story: frStory, evening: frEvening },
};

export function getContent(language: Language, period: TimePeriod): SpeechContent {
  return CONTENT_MAP[language][period];
}
