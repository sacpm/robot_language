import type { SpeechContent } from '../../types';
import { colors } from '../../data/content/french/colors';
import './ColorPanel.css';

interface ColorPanelProps {
  activeKey: string | null;
  onPlay: (content: SpeechContent, key: string) => void;
  onStop: () => void;
}

export function ColorPanel({ activeKey, onPlay, onStop }: ColorPanelProps) {
  return (
    <div className="color-panel">
      <h2 className="color-panel__title">Les Couleurs</h2>
      <p className="color-panel__subtitle">Touche une couleur !</p>
      <div className="color-panel__grid">
        {colors.map((color) => {
          const key = `color-${color.french.toLowerCase()}`;
          const isPlaying = activeKey === key;
          const isLight = ['#fdd835', '#f5f5f5', '#ffc107'].includes(color.hex);

          return (
            <button
              key={color.french}
              className={`color-btn ${isPlaying ? 'color-btn--playing' : ''}`}
              style={{
                backgroundColor: color.hex,
                color: isLight ? '#1a1d23' : '#ffffff',
              }}
              onClick={() => {
                if (isPlaying) {
                  onStop();
                } else {
                  onPlay(color.content, key);
                }
              }}
              title={color.french}
            >
              <span className="color-btn__french">{color.french}</span>
              {isPlaying && <span className="color-btn__speaker">🔊</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
