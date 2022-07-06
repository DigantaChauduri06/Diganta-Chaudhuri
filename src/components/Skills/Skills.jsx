import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

import "./Skills.css";

//Imgs
import leetcode from "../../Assets/Leetcode.png";
import gfg from "../../Assets/Gfg.png";
import hck from "../../Assets/hackerrank.svg";
import cn from "../../Assets/CN.jpg";
import lco from "../../Assets/LCO.png";
import gowc from "../../Assets/GWOC.png";
import gsc from "../../Assets/dsc.webp";
import postman from "../../Assets/postman.png";
import SkillsList from "./SkillsList";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";

const coding_profile = [
  {
    name: "Leetcode",
    url: "https://leetcode.com/DigantaC/",
    logo: leetcode,
    data: "Solved over 500+ DSA problems on Leetcode",
  },
  {
    name: "Geeks For Geeks",
    url: "https://auth.geeksforgeeks.org/user/digantachaudhuri03/profile",
    logo: gfg,
    data: "Solved over 190+ DSA Problems on Geeks for geeks",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/DIGANTACHAUDHUR1",
    logo: hck,
    data: "Solved over 140+ DSA Problems on Geeks for geeks",
  },
];
const certifications = [
  {
    name: "Data Structures in C++ Excellence Certificate by Coding ninja",
    url: "http://files.codingninjas.in/certificate1502422184451df44ef6a76cebde6e4794a569c.pdf",
    logo: cn,
    data: "Got top 3 rank out of 100 perticipents in this coding ninja course",
  },
  {
    name: "Pro backend Course by Learn Code Online",
    url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/110784/5105144_110784.pdf?1638795643",
    logo: lco,
    data: "Learned backend related stuff i.e Nodejs, Mongodb, Expressjs, Auth related stuff",
  },
  {
    name: "GWOC Participant",
    url: "https://drive.google.com/file/d/12gv-7hvoOrvXl1cE5RYuZKGnQ3uv3Fvj/view",
    logo: gowc,
    data: "Contributed Opensourse about web dev, C++ related stuff",
  },
];
const perticipetions = [
  {
    name: "GOOGLE SOLUTION CHALLENGE 2021",
    url: "https://www.linkedin.com/posts/digantachaudhuri06_happy-to-shere-that-our-team-secured-3rd-activity-6781389901431640064-V98G/?utm_source=linkedin_share&utm_medium=member_desktop_web",
    logo: gsc,
    data: "Built a flutter app with firebase and got 3rd rank from 26 teams.",
  },
  {
    name: "POSTMAN STUDENT EXPERT",
    url: "https://badgr.com/public/assertions/z5wmFbSERDuT96-K36EMTw?identity__email=digantachaudhuri03@gmail.com",
    logo: postman,
    data: "Solved Api related problems like testing and simmiler related stuffs and got the student expert from postman",
  },
];

export default function Skills() {
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
      <div style={{ position: "fixed", top: "55vh", left: "5vw" }}>
        <LeftArrow route={"/projects"} />
      </div>
      <div style={{ position: "fixed", top: "55vh", right: "5vw" }}>
        <RightArrow route={"/writeme"} />
      </div>
      <div className={isLoading ? "none-display" : undefined}>
        <h2
          className="coding-profile header-skills"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "3ch",
            fontSize: "2rem",
          }}
        >
          Coding Profiles
        </h2>
        <div className="skill-list-div">
          {coding_profile && <SkillsList list={coding_profile} />}
          <br />
          <hr />
          <br />
          <h2
            className="header-skills"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "3ch",
              fontSize: "2rem",
            }}
          >
            Certifications / Achievements
          </h2>
          {coding_profile && <SkillsList list={certifications} />}
          <br />
          <hr />
          <br />
          <h2
            className="header-skills"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "3ch",
              fontSize: "2rem",
            }}
          >
            participation
          </h2>
        </div>
        {coding_profile && <SkillsList list={perticipetions} />}
      </div>
    </>
  );
}
