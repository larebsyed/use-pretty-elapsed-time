import { useEffect, useRef } from "react";

const useAnimationFrame = (callback: (elapsedSecond: number) => void) => {
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const animateRef = useRef<(_: number) => void>((_: number) => {});

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime / 1000);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    animateRef.current = animate;
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [callback]);
  return {
    requestRef,
    previousTimeRef,
    animate: animateRef,
  };
};
export default useAnimationFrame;
