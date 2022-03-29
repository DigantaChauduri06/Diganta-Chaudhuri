import React from "react";
import ArrowRight from "../../Assets/right_arrow.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const bounceTransition = {
  x: {
    duration: 0.4,
    yoyo: 15,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: 15,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

export default function RightArrow({ route }) {
  const navigation = useNavigate();

  return (
    <motion.img
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      src={ArrowRight}
      alt=""
      width="50px"
      onClick={() => navigation(route)}
      style={{}}
    />
  );
}
