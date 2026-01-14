"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        const color = isDark ? `rgba(59, 130, 246, ${this.opacity})` : `rgba(37, 99, 235, ${this.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const isDark = resolvedTheme === "dark";
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.3,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8
      );

      if (isDark) {
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)");
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
        gradient.addColorStop(1, "transparent");
      } else {
        gradient.addColorStop(0, "rgba(37, 99, 235, 0.04)");
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
        gradient.addColorStop(1, "transparent");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx, isDark);
      });

      // Draw connection lines between nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDark
              ? `rgba(59, 130, 246, ${opacity})`
              : `rgba(37, 99, 235, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.8 }}
    />
  );
}

