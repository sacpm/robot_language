import type { SpeechContent } from '../../types';
import { countingContent } from '../../data/content/french/counting';
import { alphabetContent } from '../../data/content/french/alphabet';
import './InteractiveButtons.css';

interface InteractiveButtonsProps {
  activeKey: string | null;
  onPlay: (content: SpeechContent, key: string) => void;
  onStop: () => void;
}

export function InteractiveButtons({ activeKey, onPlay, onStop }: InteractiveButtonsProps) {
  const isCountingPlaying = activeKey === 'interactive-counting';
  const isAlphabetPlaying = activeKey === 'interactive-alphabet';

  const handleCounting = () => {
    if (isCountingPlaying) {
      onStop();
    } else {
      onPlay(countingContent, 'interactive-counting');
    }
  };

  const handleAlphabet = () => {
    if (isAlphabetPlaying) {
      onStop();
    } else {
      onPlay(alphabetContent, 'interactive-alphabet');
    }
  };

  return (
    <div className="interactive-buttons">
      <h2 className="interactive-buttons__title">Practice with Walter</h2>
      <div className="interactive-buttons__row">
        <button
          className={`interactive-btn interactive-btn--counting ${isCountingPlaying ? 'interactive-btn--playing' : ''}`}
          onClick={handleCounting}
          title={isCountingPlaying ? 'Stop counting' : 'Count to 20 in French'}
        >
          <span className="interactive-btn__icon">🔢</span>
          <span className="interactive-btn__text">
            {isCountingPlaying ? 'Stop Counting' : 'Walter, count with me to 20!'}
          </span>
          <span className="interactive-btn__badge">Fran\u00E7ais</span>
        </button>

        <button
          className={`interactive-btn interactive-btn--alphabet ${isAlphabetPlaying ? 'interactive-btn--playing' : ''}`}
          onClick={handleAlphabet}
          title={isAlphabetPlaying ? 'Stop alphabet' : 'Say the alphabet in French'}
        >
          <span className="interactive-btn__icon">🔤</span>
          <span className="interactive-btn__text">
            {isAlphabetPlaying ? 'Stop Alphabet' : "Walter, let's say the alphabet!"}
          </span>
          <span className="interactive-btn__badge">Fran\u00E7ais</span>
        </button>
      </div>
    </div>
  );
}
