import { useEffect, useRef } from 'react';
import type { CanvasPoint } from '../../types';

export const BackgroundCanvas = () => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const palette = {
      light: {
        background: "#F4F4F5", // gray-100
        line: "#E879F9",       // indigo-900 (primary)
        accent: "#E879F9",     // teal-400 (accent)
      },
      dark: {
        background: "#0F172A", // gray-900
        line: "#C026D3",       // indigo-300 (primary en dark)
        accent: "#D946EF",     // teal-300 (accent en dark)
      }
    };

    // Detectar modo oscuro
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const colors = isDark ? palette.dark : palette.light;

    // Pintar fondo
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const points: CanvasPoint[] = [];
    const numPoints: number = width <= 768 && height > width ? 100 : 200;
    const maxVelocity: number = 0.6;

    // Generar puntos iniciales
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * maxVelocity,
        vy: (Math.random() - 0.5) * maxVelocity,
      });
    }

    // Animar puntos
    const animate = (): void => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar líneas entre puntos cercanos
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance: number = Math.sqrt(
            (points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2
          );
          if (distance < 100) {
            const alpha: string = Math.floor((1 - distance / 100) * 255).toString(16).padStart(2, '0');
            ctx.beginPath();
            // Alternar entre primary y accent para dar variedad
            ctx.strokeStyle = (i % 3 === 0)
              ? `${colors.accent}${alpha}`
              : `${colors.line}${alpha}`;
            ctx.lineWidth = width <= 768 && height > width ? 0.7 : 0.8;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Actualizar posiciones de puntos
      points.forEach((point: CanvasPoint) => {
        point.x += point.vx;
        point.y += point.vy;

        // Rebotar en los bordes
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Ajustar tamaño del canvas al cambiar el tamaño de la ventana
    const handleResize = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas
    ref={canvasRef}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1
    }}
  />;
};
