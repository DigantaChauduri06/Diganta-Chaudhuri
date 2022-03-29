import React, { useState, useEffect } from "react";
import send from "../../Assets/send.svg";
import "./WriteMe.css";
import { motion } from "framer-motion";
import LeftArrow from "../Arrows/LeftArrow";
import { RingLoader } from "react-spinners";

export default function WriteMe() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="loader">
          <RingLoader color="#EB1B4E" loading={isLoading} size={250} />
        </div>
      )}
      <div className="writeup">
        <div style={{ position: "absolute", top: "55vh", left: "5vw" }}>
          <LeftArrow route={"/skills"} />
        </div>
        <h1 style={{ textAlign: "center" }} className="form-header">
          Write Me
        </h1>
        <div className="container-form">
          <form>
            <label>
              <span className="form-data-header">Name: </span>
              <input type="text" name="" />
            </label>
            <br />
            <label>
              <span className="form-data-header">Email: </span>
              <input type="email" name="" />
            </label>
            <br />
            <label>
              <span className="form-data-header">Write here</span>
              <textarea name="" id="" cols="10" rows="13" />
            </label>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn-form"
                onClick={(e) => e.preventDefault()}
              >
                <img src={send} alt="send" width={40} />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
