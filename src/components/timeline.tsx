import React from 'react';

interface Process {
  name: string;
  date: string;
}

interface TimelineProps {
  processes: Process[];
}

const Timeline: React.FC<TimelineProps> = ({ processes }) => {
  // Find the earliest and latest dates
  const dates = processes.map((process) => new Date(process.date).getTime());
  const minDate = new Date(Math.min(...dates));
  const maxDate = new Date(Math.max(...dates));

  // Calculate the total duration between min and max dates
  const totalDuration = maxDate.getTime() - minDate.getTime();

  return (
    <div className="timeline-container">
      <div className="timeline">
        {processes.map((process, index) => {
          const currentDate = new Date(process.date);
          const durationFromMin = currentDate.getTime() - minDate.getTime();
          const positionPercentage = (durationFromMin / totalDuration) * 100;

          return (
            <div key={index} className="timeline-marker" style={{ left: `${positionPercentage}%` }}>
              <span className="timeline-marker-text">{process.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
