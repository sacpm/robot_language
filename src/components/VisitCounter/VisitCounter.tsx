import { useState, useEffect } from 'react';
import './VisitCounter.css';

const STORAGE_KEY = 'robot-language-visits';

export function VisitCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const previous = stored ? parseInt(stored, 10) : 0;
    const newCount = previous + 1;
    localStorage.setItem(STORAGE_KEY, String(newCount));
    setCount(newCount);
  }, []);

  return (
    <div className="visit-counter">
      <span className="visit-counter__icon">👁</span>
      <span className="visit-counter__text">
        Visits: <strong>{count}</strong>
      </span>
    </div>
  );
}
