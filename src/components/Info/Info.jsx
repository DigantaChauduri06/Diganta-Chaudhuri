import React from "react";
import "./Info.css";
import { motion } from "framer-motion";
import RightArrow from "../Arrows/RightArrow";
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
export default function Info() {
  return (
    <div className="my-Info">
      <div className="tag-line">
        <h1 id="main-header-info">
          <span className="sub-header">HI I AM, </span>
          <motion.span id="main-header-info" className="main-header">
            DIGANTA
          </motion.span>
        </h1>
        <h3 id="sub-header-info">
          PASSIONATE <span id="dev">FULL STACK WEB DEVOLOPER</span>
        </h3>
      </div>
      <div
        style={{
          textAlign: "end",
          display: "block",
          marginRight: "60px",
          cursor: "pointer",
        }}
      >
        <RightArrow route={"/projects"} />
      </div>
    </div>
  );
}
