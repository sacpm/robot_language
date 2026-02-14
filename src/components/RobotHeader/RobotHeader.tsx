import './RobotHeader.css';

interface RobotHeaderProps {
  isSpeaking: boolean;
}

export function RobotHeader({ isSpeaking }: RobotHeaderProps) {
  return (
    <header className="robot-header">
      <div className={`robot ${isSpeaking ? 'robot--speaking' : ''}`}>
        {/* Antenna */}
        <div className="robot__antenna">
          <div className="robot__antenna-ball" />
          <div className="robot__antenna-stick" />
        </div>

        {/* Head */}
        <div className="robot__head">
          <div className="robot__eyes">
            <div className="robot__eye robot__eye--left">
              <div className="robot__pupil" />
            </div>
            <div className="robot__eye robot__eye--right">
              <div className="robot__pupil" />
            </div>
          </div>
          <div className="robot__mouth" />
        </div>

        {/* Body */}
        <div className="robot__body">
          {/* Left arm */}
          <div className="robot__arm robot__arm--left">
            <div className="robot__hand" />
          </div>

          {/* Torso */}
          <div className="robot__torso">
            <div className="robot__chest-light" />
          </div>

          {/* Right arm */}
          <div className="robot__arm robot__arm--right">
            <div className="robot__hand" />
          </div>
        </div>
      </div>

      <h1 className="robot-header__title">Robot Language</h1>
      <p className="robot-header__subtitle">Your Weekly Language Companion</p>
    </header>
  );
}
