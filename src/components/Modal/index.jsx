import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";
import close from "../../Assets/close.svg";

import "./Modal.css";

export default function Modal({ handleClose, form }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal modal-projects grayish"
        drag
        variants={{
          hidden: {
            y: "-100vh",
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.1,
              type: "spring",
              damping: 25,
              stiffness: 500,
            },
          },

          exit: {
            y: "100vh",
            opacity: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {form}
        <button className="close" onClick={handleClose}>
          <img
            src={close}
            alt=""
            width={40}
            style={{
              position: "fixed",
              top: "10px",
              right: "20px",
            }}
          />
        </button>
      </motion.div>
    </Backdrop>
  );
}
