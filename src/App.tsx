import './App.css';
import { useCurrentDay } from './hooks/useCurrentDay';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { RobotHeader } from './components/RobotHeader/RobotHeader';
import { WeeklySchedule } from './components/WeeklySchedule/WeeklySchedule';
import { NowPlaying } from './components/NowPlaying/NowPlaying';

function App() {
  const currentDay = useCurrentDay();
  const speech = useSpeechSynthesis();

  return (
    <div className="app">
      <RobotHeader />
      <WeeklySchedule
        currentDay={currentDay}
        activeKey={speech.activeKey}
        onPlay={speech.speak}
        onStop={speech.stop}
      />
      <NowPlaying
        activeKey={speech.activeKey}
        playbackState={speech.playbackState}
        currentSegment={speech.currentSegmentIndex}
        totalSegments={speech.totalSegments}
        onStop={speech.stop}
      />
    </div>
  );
}

export default App;
