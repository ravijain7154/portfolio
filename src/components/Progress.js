
import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider'
import "react-circular-progressbar/dist/styles.css";

//  progress bar

const Progress = ({ percentage = 0, type = "circle", max = 10, label="skills" }) => {
  const parsedPercentage = Math.max(0, Math.min(percentage, 100));
  const filledCount = Math.round((percentage / 100) * max);

  if (type === "circle") {
    return (
      <div className="col-7 col-md-4 text-center">
        <AnimatedProgressProvider
          key={parsedPercentage}
          valueStart={0}
          valueEnd={parsedPercentage}
          duration={0.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => (
            <CircularProgressbar
              value={parsedPercentage}
              text={`${parsedPercentage}%`}
              strokeWidth={5}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathStroke: 'blue', // Set fill color
                pathTransition: 'stroke 0.8s ease-in-out', // Add transition,
                pathColor: `rgba(251, 220, 186, ${parsedPercentage / 100})`,
                textColor: "#ffffff",
                trailColor: "transparent",
              })}
            />
          )}
            

        </AnimatedProgressProvider>
        <div className="label">{label || "Skill"}</div>
      </div>
    );
  }

  if (type === "linear") {
    return (
      <div className="skill-block">
      <div className="skill-header">
        <span className="skill-name">{label || "Skill"}</span>
        <span className="skill-percentage">{parsedPercentage}%</span>
      </div>
      <div className="skill-bar-container">
        <div
          className="skill-bar-fill"
          style={{ width: `${parsedPercentage}%` }}
        ></div>
      </div>
    </div>
    );
  }

  if (type === "bullet") {
    return (
      <div className="bullet-progress">
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            className={`bullet ${i < filledCount ? "filled" : ""}`}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default Progress;