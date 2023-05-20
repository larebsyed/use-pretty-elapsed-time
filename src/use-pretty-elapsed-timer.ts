import { useState, useEffect, useCallback } from "react";
import formatTime from "./format-time";
import useAnimationFrame from "./use-animation-frame";

const usePrettyElapsedTimer = (formatString: string, maxTime = Infinity) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);

  useAnimationFrame((deltaTime) => {
    if (isRunning) {
      setElapsedSeconds((prevElapsedTime) => prevElapsedTime + deltaTime);
    }
  });

  useEffect(() => {
    if (elapsedSeconds > maxTime) {
      onStop();
    }
  }, [elapsedSeconds]);

  const onStart = useCallback(() => {
    setIsRunning(true);
    setStartTime(Date.now() - elapsedSeconds);
  }, []);

  const onStop = useCallback(() => {
    setIsRunning(false);
    setStartTime(0);
  }, []);

  const onReset = useCallback(() => {
    setElapsedSeconds(0);
    setIsRunning(false);
    setStartTime(0);
  }, []);

  return {
    elapsedTime: formatTime(formatString, elapsedSeconds),
    start: onStart,
    stop: onStop,
    reset: onReset,
    running: isRunning
  };
};
export default usePrettyElapsedTimer;
