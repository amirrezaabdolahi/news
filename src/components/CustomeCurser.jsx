"use client";
import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = document.createElement("div");
        cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255,255,255,0.8);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 0.15s ease-out;
    `;
        document.body.appendChild(cursor);

        document.documentElement.style.cursor = "none";

        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;
        let scale = 1;

        const followMouse = () => {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;
            cursor.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
            requestAnimationFrame(followMouse);
        };
        followMouse();

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Keep the scale centered
        const enlarge = () => {
            scale = 1.6;
        };
        const shrink = () => {
            scale = 1;
        };

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", enlarge);
            el.addEventListener("mouseleave", shrink);
        });

        // Cleanup
        return () => {
            cursor.remove();
            document.documentElement.style.cursor = "auto";
        };
    }, []);

    return null;
}
