import React from "react";
import "./ProjectDetails.css";
import { motion } from "framer-motion";

import github from "../../Assets/github-brands.svg";
import link from "../../Assets/link.svg";

export default function ProjectDetails({ item }) {
  return (
    <div className="project-Details">
      <h2 style={{ padding: 20, fontSize: "1.9rem" }}>{item.name}</h2>
      <p className="projects-dec">{item.data}</p>
      <hr />
      <h3 style={{ padding: 10, marginBottom: "20px", fontSize: "1.6rem" }}>
        Techstack
      </h3>
      <div style={{ height: "75px", textAlign: "center" }}>
        {item.techstack.map((pics, idx) => {
          return (
            <img
              key={idx}
              src={pics}
              alt=""
              width={70}
              style={{ paddingRight: 10, marginTop: 1 }}
            />
          );
        })}
      </div>
      <hr />
      <div style={{ marginTop: 30 }}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={github}
          alt=""
          width="40px"
          style={{
            filter: "invert(90%)",
            cursor: "pointer",
            marginRight: "30px",
          }}
          onClick={() => window.open(`${item.link[1]}`)}
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={link}
          alt=""
          width="40px"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(`${item.link[0]}`)}
        />
      </div>
    </div>
  );
}
