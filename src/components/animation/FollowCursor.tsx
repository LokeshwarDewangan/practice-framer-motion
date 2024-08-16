import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FollowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor-follow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        backgroundColor: "black",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 100,
      }}
      animate={{
        x: cursorPosition.x - 10, // Subtract half the size to center
        y: cursorPosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
};

export default FollowCursor;
