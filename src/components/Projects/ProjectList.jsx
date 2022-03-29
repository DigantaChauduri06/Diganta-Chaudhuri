import React, { useState } from "react";
import Modal from "../Modal/index";

import "./ProjectList.css";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

export default function ProjectList({ projects }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [rightItem, setRightItem] = useState([]);
  const toggleClose = () => setModalOpen(false);
  return (
    <>
      {projects.map((item) => {
        return (
          <div key={item.id} style={{ textAlign: "center" }}>
            <motion.img
              src={item.image}
              alt=""
              width={350}
              height={250}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ borderRadius: 20 }}
              className="project-img"
              onClick={(e) => {
                setModalOpen(modalOpen ? false : true);
                setRightItem(item);
              }}
            />
            <AnimatePresence initial={false} exitBeforeEnter={true}>
              {modalOpen && (
                <Modal
                  handleClose={() => setModalOpen(false)}
                  modalOpen={toggleClose}
                  form={<ProjectDetails item={rightItem} />}
                />
              )}
            </AnimatePresence>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </>
  );
}
