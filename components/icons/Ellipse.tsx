"use client";
import { motion } from "motion/react";

type EllipseProps = {
  className?: string;
};

export default function Ellipse({ className }: EllipseProps) {
  return (
    <motion.svg
      width="1920"
      height="225"
      viewBox="0 0 1920 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        stiffness: 300,
        damping: 10,
        duration: 0.8,
      }}
    >
      <ellipse cx="950" cy="220" rx="1071" ry="220" fill="#363636" />
    </motion.svg>
  );
}
