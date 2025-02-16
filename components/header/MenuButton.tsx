"use client";
import { motion } from "motion/react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
}

export default function MenuButton({
  isOpen = false,
  width = 26,
  height = 13,
  strokeWidth = 1.5,
  color = "#ffffff",
  ...props
}: Props) {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  const lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      role="svg"
      aria-label="Edit hamburger icon"
      {...props}
    >
      <motion.line
        role="line"
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        role="line"
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        role="line"
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}
