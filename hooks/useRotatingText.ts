import { useEffect, useState } from 'react';

export function useRotatingText(items: string[], intervalTime = 2500) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [items.length, intervalTime]);

  return {
    currentText: items[currentIndex],
    currentIndex,
  };
}
