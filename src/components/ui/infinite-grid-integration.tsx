import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import { useWindowSize } from '../../hooks/useWindowSize';

interface InfiniteGridProps {
  className?: string;
  cellSize?: number;
  opacity?: number;
  speed?: number;
}

const InfiniteGrid: React.FC<InfiniteGridProps> = ({ 
  className = '', 
  cellSize = 30, 
  opacity = 0.12, // Increased opacity as requested
  speed = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const time = useMotionValue(0);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  
  // Animation loop for infinite grid movement
  useAnimationFrame((frameTime) => {
    time.set(frameTime * 0.001 * speed);
  });

  // Calculate grid offsets based on time for continuous movement
  const offsetX = useTransform(time, (t) => Math.sin(t) * cellSize);
  const offsetY = useTransform(time, (t) => Math.cos(t * 0.7) * cellSize);

  // Memoize grid generation to avoid recreating on every render
  const gridCells = useMemo(() => {
    if (!windowWidth || !windowHeight) return null;
    
    // Calculate grid dimensions with extra space for animation
    const cols = Math.ceil(windowWidth / cellSize) + 4; // Add extra columns for seamless animation
    const rows = Math.ceil(windowHeight / cellSize) + 4; // Add extra rows for seamless animation
    const totalCells = cols * rows;
    
    const cells = [];
    
    for (let i = 0; i < totalCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      cells.push(
        <div
          key={`${col}-${row}`}
          className="absolute border-border/20 border-[0.5px]"
          style={{
            width: cellSize,
            height: cellSize,
            left: col * cellSize,
            top: row * cellSize,
          }}
        />
      );
    }
    
    return cells;
  }, [windowWidth, windowHeight, cellSize]);

  // Performance: Mouse move handler to prevent excessive updates
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  }, [mouseX, mouseY]);

  // Performance: Use GPU-accelerated transformations for mouse following effect
  const mouseRadius = 150;
  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => {
      if (!containerRef.current) return 'radial-gradient(circle, transparent 100px, transparent 100px)';
      return `radial-gradient(circle at ${x}px ${y}px, rgba(0,0,0,0.2) ${mouseRadius * 0.5}px, transparent ${mouseRadius}px)`;
    }
  );

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      onMouseMove={handleMouseMove}
      style={{ opacity }}
    >
      {/* Animated static grid background - always visible */}
      <motion.div 
        className="absolute inset-0"
        style={{
          x: offsetX,
          y: offsetY
        }}
      >
        {gridCells}
      </motion.div>
      
      {/* Mouse interaction overlay - reveals brighter grid on mouse proximity */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          maskImage,
          WebkitMaskImage: maskImage,
          x: offsetX,
          y: offsetY
        }}
      >
        <div className="absolute inset-0 opacity-45"> {/* Increased opacity for mouse interaction */}
          {gridCells}
        </div>
      </motion.div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5" />
    </div>
  );
};

export default InfiniteGrid;