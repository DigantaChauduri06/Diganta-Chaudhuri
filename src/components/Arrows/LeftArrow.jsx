import React from "react";
import ArrowRight from "../../Assets/arrow_left.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const bounceTransition = {
  x: {
    duration: 0.4,
    yoyo: 30,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: 30,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

export default function LeftArrow({ route, isTransition = false }) {
  const navigation = useNavigate();

  return (
    <motion.img
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      //   animate={{
      //     x: ["-100%", "100%"],
      //   }}
      src={ArrowRight}
      alt=""
      width="50px"
      onClick={() => navigation(route)}
    />
  );
}
