import React, { useState } from "react";
import "./SkillList.css";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal";
import SkillsDetails from "./SkillsDetails";
export default function SkillsList({ list }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [rightItem, setRightItem] = useState([]);
  const toggleClose = () => setModalOpen(false);

  const handleClick = (item) => {
    setModalOpen(modalOpen ? false : true);
    setRightItem(item);
  };
  return (
    <div className="skill-list">
      {list &&
        list.map((item, idx) => {
          return (
            <div key={idx} className="container-skills">
              <motion.img
                src={item.logo}
                alt=""
                width={100}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ borderRadius: "20%" }}
                className="skill-logo"
                onClick={() => handleClick(item)}
              />
              <h3 className="skill-name">{item.name}</h3>
              <AnimatePresence initial={false} exitBeforeEnter={true}>
                {modalOpen && (
                  <Modal
                    handleClose={() => setModalOpen(false)}
                    modalOpen={toggleClose}
                    form={<SkillsDetails item={rightItem} />}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
    </div>
  );
}
