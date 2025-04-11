// src/components/NetworkMap.js
import React, { useEffect, useRef } from "react";

const NetworkMap = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 240;

    const colors = ["rgba(0,255,0,0.7)", "rgba(255,255,0,0.7)", "rgba(255,0,0,0.7)"];

    let nodes = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      radius: 3,
      phase: Math.random() * 100,
      colorIndex: Math.floor(Math.random() * colors.length),
    }));

    const drawNode = (node, t) => {
      const pulse = Math.sin((t + node.phase) / 20) * 1.5 + node.radius;
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulse, 0, Math.PI * 2);
      ctx.fillStyle = colors[node.colorIndex];
      ctx.fill();
    };

    const drawLink = (a, b) => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        const cpX = (a.x + b.x) / 2 + 10 * Math.sin(a.y);
        const cpY = (a.y + b.y) / 2 - 10 * Math.cos(b.x);
        ctx.quadraticCurveTo(cpX, cpY, b.x, b.y);
        ctx.strokeStyle = "rgba(0,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    let t = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;
      for (let node of nodes) {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        drawNode(node, t);
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          drawLink(nodes[i], nodes[j]);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-60 z-0 opacity-30 pointer-events-none"
    />
  );
};

export default NetworkMap;
