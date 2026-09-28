import { useState, useEffect } from 'react';

export const TOTAL_SECONDS_15_MIN = 15 * 60; // 900 seconds (15 minutes)
export const STORAGE_KEY = 'bizz2u_15m_countdown_start';
export const TOTAL_PROMOTIONAL_LICENSES = 100;

/**
 * Calculates real-time remaining stock according to the exact countdown schedule:
 * - 15m to 10m (> 600s): starts at 14 left
 * - 10m (600s): 13 left ("example if time reduce from 15min to 10 minute. the 14left change to 13 left")
 * - 10m to 5m (600s to 300s): reduces down to 9 left ("from 10min reduced to 5 min 13 stock become 9 left")
 * - 5m to 3m (300s to 180s): reduces down to 5 left ("5 min reduce to 3 min 9 stock become 5left")
 * - 3m to 0m (180s to 0s): final rush down to 4, 3, 2, 1 left
 */
export const calculateStockRemaining = (secondsRemaining: number): number => {
  // > 10 minutes (600s to 900s): 14 left
  if (secondsRemaining > 600) {
    return 14;
  }

  // 10 minutes down to 5 minutes (600s down to 300s)
  // Drops from 13 down to 9
  if (secondsRemaining > 525) return 13; // 10m to 8m45s
  if (secondsRemaining > 450) return 12; // 8m45s to 7m30s
  if (secondsRemaining > 375) return 11; // 7m30s to 6m15s
  if (secondsRemaining > 300) return 10; // 6m15s to 5m00s

  // At 5m00s (300s) down to 3m00s (180s)
  // Drops from 9 down to 5
  if (secondsRemaining > 270) return 9;  // 5m00s to 4m30s
  if (secondsRemaining > 240) return 8;  // 4m30s to 4m00s
  if (secondsRemaining > 210) return 7;  // 4m00s to 3m30s
  if (secondsRemaining > 180) return 6;  // 3m30s to 3m00s

  // At 3m00s (180s) down to 0
  // Drops from 5 down to 1
  if (secondsRemaining > 135) return 5;  // 3m00s to 2m15s
  if (secondsRemaining > 90) return 4;   // 2m15s to 1m30s
  if (secondsRemaining > 45) return 3;   // 1m30s to 0m45s
  if (secondsRemaining > 15) return 2;   // 0m45s to 0m15s
  return 1; // Under 15s: 1 license left!
};

export const getInitialSecondsRemaining = (): number => {
  try {
    const storedStart = localStorage.getItem(STORAGE_KEY);
    const now = Math.floor(Date.now() / 1000);
    if (storedStart) {
      const elapsed = now - parseInt(storedStart, 10);
      if (elapsed >= 0 && elapsed < TOTAL_SECONDS_15_MIN) {
        return TOTAL_SECONDS_15_MIN - elapsed;
      }
    }
    localStorage.setItem(STORAGE_KEY, now.toString());
    return TOTAL_SECONDS_15_MIN;
  } catch {
    return TOTAL_SECONDS_15_MIN;
  }
};

export interface CountdownState {
  secondsRemaining: number;
  minutes: number;
  seconds: number;
  hours: number;
  formattedTime: string;
  stockRemaining: number;
  claimedCount: number;
  percentElapsed: number;
}

export const useCountdownTimer = (): CountdownState => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(getInitialSecondsRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          try {
            const now = Math.floor(Date.now() / 1000);
            localStorage.setItem(STORAGE_KEY, now.toString());
          } catch {}
          return TOTAL_SECONDS_15_MIN;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedTime = `${pad(minutes)}:${pad(seconds)}`;

  const stockRemaining = calculateStockRemaining(secondsRemaining);
  const claimedCount = TOTAL_PROMOTIONAL_LICENSES - stockRemaining; // e.g. 100 - 14 = 86
  const percentElapsed = ((TOTAL_SECONDS_15_MIN - secondsRemaining) / TOTAL_SECONDS_15_MIN) * 100;

  return {
    secondsRemaining,
    minutes,
    seconds,
    hours,
    formattedTime,
    stockRemaining,
    claimedCount,
    percentElapsed
  };
};
