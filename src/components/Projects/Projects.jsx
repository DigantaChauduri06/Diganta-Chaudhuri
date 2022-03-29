import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import "./Projects.css";

import { getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../Firebase/firebase-config";
import ProjectList from "./ProjectList";
import RightArrow from "../Arrows/RightArrow";
import LeftArrow from "../Arrows/LeftArrow";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore(app);
    const firebaseCollection = collection(db, "projects");
    const result = [];
    getDocs(firebaseCollection)
      .then((snapshot) => {
        console.log(snapshot.docs);

        snapshot.docs.forEach((ele) => {
          result.push({ id: ele.id, ...ele.data() });
        });
        setProjects(result);
      })
      .catch((e) => {
        console.error("Error", e);
        setError(e);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      {isLoading && (
        <div className="loader">
          <RingLoader color="#EB1B4E" loading={isLoading} size={250} />
        </div>
      )}
      <div className={isLoading ? "none-display" : undefined}>
        <div style={{ position: "fixed", top: "55vh", right: "5vw" }}>
          <RightArrow route={"/skills"} />
        </div>
        <div style={{ position: "fixed", top: "55vh", left: "5vw" }}>
          <LeftArrow route={"/"} />
        </div>
        <h1 className="header-projects" style={{ textAlign: "center" }}>
          Projects
        </h1>
        <div className="grid">
          {projects && <ProjectList projects={projects} />}
        </div>
      </div>
    </div>
  );
}

// Firebase: https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg
// Nodejs : https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg
// Mongodb: https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress
// stripe: http://t3.gstatic.com/images?q=tbn:ANd9GcSJHbnfk81kA_5mIj81yhRy3R2LRx3S11OyMjC68QeONsOp5DXx
// Razor: https://media-exp1.licdn.com/dms/image/C560BAQHggYLcXxs78w/company-logo_200_200/0/1592541089153?e=1655942400&v=beta&t=7yw8nBK9_V5qibIdho5CGsElRBjGGRyzZgD2hX5BgX4
// React: https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg
