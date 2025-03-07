import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.css";

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const particles = useRef([]);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const numParticles = 12;

        // Create particle elements
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            document.body.appendChild(particle);
            particles.current.push(particle);
        }

        // Cursor movement effect
        const moveCursor = (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, ease: "power3.out" });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power3.out" });

            // Particle trail effect
            particles.current.forEach((particle, index) => {
                gsap.to(particle, {
                    x: e.clientX + (Math.random() - 0.5) * 20,
                    y: e.clientY + (Math.random() - 0.5) * 20,
                    opacity: 1,
                    scale: Math.random() * 0.7 + 0.3,
                    duration: 0.2 + index * 0.02,
                    ease: "power3.out",
                    onComplete: () => {
                        gsap.to(particle, { opacity: 0, duration: 0.3 });
                    },
                });
            });
        };

        // Click effect (Shape-shifting + burst particles)
        const handleClick = (e) => {
            gsap.to(cursor, { width: 50, height: 50, borderRadius: "20%", duration: 0.15, ease: "power3.out" });
            gsap.to(cursor, { width: 20, height: 20, borderRadius: "50%", duration: 0.15, delay: 0.15 });

            for (let i = 0; i < 8; i++) {
                const burst = document.createElement("div");
                burst.classList.add("burst-particle");
                document.body.appendChild(burst);
                
                gsap.to(burst, {
                    x: e.clientX + Math.cos((Math.PI * 2 * i) / 8) * 30,
                    y: e.clientY + Math.sin((Math.PI * 2 * i) / 8) * 30,
                    opacity: 1,
                    scale: Math.random() * 1.2 + 0.3,
                    duration: 0.3,
                    ease: "power3.out",
                    onComplete: () => {
                        gsap.to(burst, { opacity: 0, duration: 0.3, onComplete: () => burst.remove() });
                    },
                });
            }
        };

        const addHoverEffect = () => gsap.to(follower, { scale: 1.5, duration: 0.2 });
        const removeHoverEffect = () => gsap.to(follower, { scale: 1, duration: 0.2 });

        // Ensure system cursor never appears
        document.body.style.cursor = "none";

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("click", handleClick);
        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", addHoverEffect);
            el.addEventListener("mouseleave", removeHoverEffect);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default Cursor;