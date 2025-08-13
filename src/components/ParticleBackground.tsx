import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'circuit' | 'nature' | 'fairy';
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        const types: Particle['type'][] = ['circuit', 'nature', 'fairy'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        let color: string;
        switch (type) {
          case 'circuit':
            color = '#84e802';
            break;
          case 'nature':
            color = '#8fbc8f';
            break;
          case 'fairy':
            color = '#ffc1cc';
            break;
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color,
          type
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      
      if (particle.type === 'circuit') {
        // Draw circuit-like squares
        ctx.fillRect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fillRect(particle.x - particle.size / 4, particle.y - particle.size / 4, particle.size / 2, particle.size / 2);
      } else {
        // Draw organic circles for nature and fairy particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        if (particle.type === 'fairy') {
          // Add sparkle effect for fairy particles
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fill();
        }
      }
      
      ctx.restore();
    };

    const connectParticles = (p1: Particle, p2: Particle) => {
      const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        ctx.save();
        const opacity = (1 - distance / maxDistance) * 0.1;
        ctx.globalAlpha = opacity;
        
        // Use different connection styles based on particle types
        if (p1.type === 'circuit' && p2.type === 'circuit') {
          ctx.strokeStyle = '#84e802';
          ctx.lineWidth = 1;
        } else if ((p1.type === 'nature' || p2.type === 'nature')) {
          ctx.strokeStyle = '#8fbc8f';
          ctx.lineWidth = 0.5;
        } else {
          ctx.strokeStyle = '#ffc1cc';
          ctx.lineWidth = 0.5;
        }
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Add subtle floating animation
        particle.y += Math.sin(Date.now() * 0.001 + i) * 0.1;
        
        // Pulsing opacity for fairy particles
        if (particle.type === 'fairy') {
          particle.opacity = 0.2 + Math.sin(Date.now() * 0.003 + i) * 0.1;
        }
        
        drawParticle(particle);
        
        // Connect particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          connectParticles(particle, particlesRef.current[j]);
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;
