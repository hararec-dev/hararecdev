import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../context';
import type { CanvasPoint } from '../../types';

export const BackgroundCanvas = () => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const getThemeColors = () => {
      const isDark = themeContext?.theme === 'dark';
      const bgElement = document.createElement('div');
      const textElement = document.createElement('div');
      bgElement.className = isDark ? 'bg-background-dark' : 'bg-background-light';
      textElement.className = isDark ? 'bg-sky-800' : 'bg-sky-300';
      document.body.appendChild(bgElement);
      document.body.appendChild(textElement);
      const bgStyle = window.getComputedStyle(bgElement);
      const textStyle = window.getComputedStyle(textElement);
      const colors = {
        background: bgStyle.backgroundColor,
        line: textStyle.backgroundColor,
      };
      
      document.body.removeChild(bgElement);
      document.body.removeChild(textElement);
      
      return colors;
    };

    const colors = getThemeColors();

    // Paint background
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const points: CanvasPoint[] = [];
    const numPoints: number = width <= 768 && height > width ? 100 : 200;
    const maxVelocity: number = 0.6;

    // Generate initial points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * maxVelocity,
        vy: (Math.random() - 0.5) * maxVelocity,
      });
    }

    // Animate points
    const animate = (): void => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines between nearby points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance: number = Math.sqrt(
            (points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = width <= 768 && height > width ? 0.7 : 0.8;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Update point positions
      points.forEach((point: CanvasPoint) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Adjust canvas size when window is resized
    const handleResize = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [themeContext?.theme]);

  return <canvas
    ref={canvasRef}
    className="fixed top-0 left-0 w-full h-full -z-10"
  />;
};
