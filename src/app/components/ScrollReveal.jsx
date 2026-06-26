"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";

export default function SectionReveal({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
  const element = sectionRef.current;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart reverse restart reverse",
      },
    }
  );
}, []);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}