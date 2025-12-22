"use client";

import { useState, useEffect } from 'react';

type TimeUnit = "Days" | "Hours" | "Minutes" | "Seconds";

interface CountdownProps {
  targetDate: string;
}

const CountdownItem = ({ value, label }: { value: number; label: TimeUnit }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 w-24">
    <span className="text-4xl font-bold font-headline tracking-tighter">{value}</span>
    <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
  </div>
);

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
    }

    return timeLeft as Record<TimeUnit, number>;
  };

  const [timeLeft, setTimeLeft] = useState<Record<TimeUnit, number> | null>(null);

  useEffect(() => {
    // Set initial time on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  if (!timeLeft) {
    return (
        <div className="flex justify-center gap-4 animate-pulse">
            {(['Days', 'Hours', 'Minutes', 'Seconds'] as TimeUnit[]).map(unit => (
                <div key={unit} className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 w-24">
                    <div className="h-10 w-10 bg-white/20 rounded"></div>
                    <div className="h-4 w-16 bg-white/20 rounded mt-2"></div>
                </div>
            ))}
        </div>
    );
  }

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {(Object.keys(timeLeft) as TimeUnit[]).map((unit) => (
        <CountdownItem key={unit} value={timeLeft[unit]} label={unit} />
      ))}
    </div>
  );
}
