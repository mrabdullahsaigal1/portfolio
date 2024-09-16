import { useEffect, useState, useCallback, useRef } from 'react';

const useAutoScroll = () => {
  const [sections, setSections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const inactivityTimer = useRef(null);
  const autoScrollTimer = useRef(null);

  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);

    // Clear existing inactivity timer if any
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }

    // Set a new inactivity timer to resume auto-scroll
    inactivityTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 100000); // Resume auto-scroll after 5 seconds of inactivity
  }, []);

  useEffect(() => {
    // Detect all sections in the document
    const sectionElements = document.querySelectorAll('section');
    setSections(sectionElements);

    // Set up event listeners to pause scrolling on user interaction
    const events = ['mousemove', 'click', 'touchstart'];
    events.forEach(event => window.addEventListener(event, handleUserInteraction));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleUserInteraction));
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    };
  }, [handleUserInteraction]);

  useEffect(() => {
    if (sections.length === 0) return;

    if (!isPaused) {
      autoScrollTimer.current = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % sections.length;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        setCurrentIndex(nextIndex);
      }, 8000); // 30 seconds delay
    }

    return () => clearTimeout(autoScrollTimer.current);
  }, [isPaused, sections, currentIndex]);

  return { isPaused, setIsPaused };
};

export default useAutoScroll;
