import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  delay?: number;
}

const RevealSection = ({
  children,
  className = '',
  animation = 'reveal',
  delay = 0,
}: RevealSectionProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  
  const staggerClass = delay > 0 ? `stagger-${Math.min(delay, 5)}` : '';
  
  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealSection;
