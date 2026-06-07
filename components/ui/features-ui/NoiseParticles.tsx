"use client";

import React, { useRef, useEffect } from "react";

interface ParticleData {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  color: string;
  activeColor: string;
  density: number;

  draw(): void;
  update(): void;
  isNearMouse(): boolean;
}

interface NoiseParticlesProps {
  color?: string;
}

const NoiseParticles = ({ color }: NoiseParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Automatically read CSS variable
    const primaryColor =
      color ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim() ||
      "#9e37ed";

    let particles: Particle[] = [];
    let animationId: number;

    class Particle implements ParticleData {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      color: string;
      activeColor: string;
      density: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.baseX = this.x;
        this.baseY = this.y;

        this.size = Math.random() * 3 + 1;

        this.density = Math.random() * 30 + 1;

        this.color =
          Math.random() > 0.5
            ? "#ffffff10"
            : "#ffffff05";

        this.activeColor = primaryColor;
      }

      isNearMouse() {
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;

        return Math.sqrt(dx * dx + dy * dy) < 100;
      }

      draw() {
        ctx.fillStyle = this.isNearMouse()
          ? this.activeColor
          : this.color;

        ctx.fillRect(
          this.x,
          this.y,
          this.size,
          this.size
        );
      }

      update() {
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy) || 1;

        const maxDistance = 100;

        if (distance < maxDistance) {
          const force =
            (maxDistance - distance) / maxDistance;

          this.x -=
            (dx / distance) *
            force *
            this.density;

          this.y -=
            (dy / distance) *
            force *
            this.density;
        } else {
          this.x +=
            (this.baseX - this.x) * 0.08;

          this.y +=
            (this.baseY - this.y) * 0.08;
        }
      }
    }

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      particles = [];

      const particleCount =
        Math.floor(
          (canvas.width * canvas.height) /
            800
        );

      for (
        let i = 0;
        i < particleCount;
        i++
      ) {1
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId =
        requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (
      e: MouseEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouse.current = {
        x: -1000,
        y: -1000,
      };
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    canvas.parentElement?.addEventListener(
      "mousemove",
      handleMouseMove
    );

    canvas.parentElement?.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        handleResize
      );

      canvas.parentElement?.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.parentElement?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="creatorshelf-particle-canvas"
    />
  );
};

export default NoiseParticles;