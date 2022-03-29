import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import Modal from "../Modal/index";
import { LoaderContext } from "../../context/LoaderContext";
// Imgs
import logo from "../../Assets/Logo.jpg";

import Info from "../Info/Info";
import Socials from "../Info/Socials";
import ModalText from "../Modal/ModalText";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleClose = () => setModalOpen(false);
  const { setLoader } = useContext(LoaderContext);
  return (
    <div className="Navbar">
      <nav className="nav">
        <ul>
          <li classname="item-1">
            <NavLink
              to="/"
              onClick={() => {
                setLoader(true);
                setTimeout(() => {
                  setLoader(false);
                }, 500);
              }}
            >
              <img
                src={logo}
                alt="Logo"
                width="50px"
                height="50px"
                style={{ borderRadius: "33%" }}
              />
            </NavLink>
          </li>
          <li id="writeme-item">
            <NavLink to="/writeme">Write Me</NavLink>
          </li>
          <li id="project-item">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li id="skills-item">
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li id="btn-navbar" className="btn-li item-5">
            <motion.button
              id="btn-nav"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn"
              onClick={() => setModalOpen(modalOpen ? false : true)}
            >
              Contact me
            </motion.button>
          </li>
        </ul>
      </nav>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(false)}
            modalOpen={toggleClose}
            form={<ModalText />}
          />
        )}
      </AnimatePresence>
      <Info />
      <Socials />
    </div>
  );
}
