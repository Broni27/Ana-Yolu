import { useEffect, RefObject } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (ref: RefObject<HTMLElement>): AnimationControls => {
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return controls;
};

