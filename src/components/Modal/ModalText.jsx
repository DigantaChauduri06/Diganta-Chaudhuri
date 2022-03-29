import React from "react";
import phone from "../../Assets/phone.svg";
import mail from "../../Assets/mail.svg";

import "./ModalText.css";
export default function ModalText() {
  return (
    <div className="ModalText">
      <h1 className="modal-header">Contact Me</h1>
      <br />
      <div className="details-modal">
        <h3 className="modal-name">
          NAME:
          <span className="my-name" style={{ marginLeft: "10px" }}>
            Diganta Chaudhuri
          </span>
        </h3>
        <h3 className="ph-no">
          <img src={phone} alt="" width={25} style={{ marginRight: "30px" }} />
          +91-8617695177
        </h3>
        <h3 className="mail-id">
          <img src={mail} alt="" width={25} style={{ marginRight: "30px" }} />
          digantachaudhuri03@gamil.com
        </h3>
      </div>
    </div>
  );
}
