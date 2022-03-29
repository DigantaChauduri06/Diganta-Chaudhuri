import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Socials.css";
import github from "../../Assets/github-brands.svg";
import linkedin from "../../Assets/linkedin-brands.svg";
import twitter from "../../Assets/twitter-brands.svg";
import { useNavigate } from "react-router-dom";
export default function Socials() {
  const navigate = useNavigate();
  return (
    <>
      <div className="socials">
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={github}
            alt=""
            width="40px"
            style={{ filter: "invert(90%)", cursor: "pointer" }}
            onClick={() => window.open("https://github.com/DigantaChauduri06")}
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={linkedin}
            alt=""
            width="40px"
            style={{ filter: "invert(90%)", cursor: "pointer" }}
            onClick={() =>
              window.open("https://linkedin.com/in/digantachaudhuri06")
            }
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={twitter}
            alt=""
            width="40px"
            style={{ filter: "invert(90%)", cursor: "pointer" }}
            onClick={() => window.open("https://twitter.com/Digantachaudhu2")}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
