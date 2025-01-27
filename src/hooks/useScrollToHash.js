import { useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const { asPath, push } = useRouter();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split('#')[1];
      const targetElement = document.getElementById(id);
      const route = asPath.split('#')[0];
      const newPath = `${route}#${id}`;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

        const handleScroll = () => {
          clearTimeout(scrollTimeout.current);

          scrollTimeout.current = setTimeout(() => {
            window.removeEventListener('scroll', handleScroll);

            if (window.location.pathname === route) {
              onDone?.();
              push(newPath, null, { scroll: false });
            }
          }, 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
          clearTimeout(scrollTimeout.current);
        };
      } else {
        console.error(`Element with id ${id} not found`);
      }
    },
    [push, reduceMotion, asPath]
  );

  return scrollToHash;
}
