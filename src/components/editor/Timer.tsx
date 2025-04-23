
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);
  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setSeconds(0);
    setIsActive(true);
  };
  
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="flex items-center text-sm font-mono gap-1.5" onClick={toggleTimer} title="Click to pause/resume">
      <Clock className="h-3.5 w-3.5" />
      <span className={isActive ? '' : 'opacity-70'}>{formatTime(seconds)}</span>
    </div>
  );
}

export default Timer;
