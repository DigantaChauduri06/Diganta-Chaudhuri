import React from "react";
import link from "../../Assets/link.svg";
import "./skillDetails.css";
import { motion } from "framer-motion";

export default function SkillsDetails({ item }) {
  return (
    <div className="skillDetails" style={{ padding: "15%" }}>
      {
        <>
          <img
            src={item.logo}
            alt=""
            width={"200px"}
            style={{ borderRadius: "23%", marginBottom: "30px" }}
          />
          <h2 style={{ marginBottom: "20px" }}>{item.name}</h2>
          <p style={{ marginBottom: "50px" }}>{item.data}</p>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={link}
            alt=""
            width="40px"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(`${item.url}`)}
          />
        </>
      }
    </div>
  );
}
