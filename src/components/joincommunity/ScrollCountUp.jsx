"use client";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

const ScrollCountUp = ({ end }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {start && <CountUp end={end} duration={2} />}
    </span>
  );
};

export default ScrollCountUp;
