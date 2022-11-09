import React from "react";
import "./main.css";
import { useInView } from "react-intersection-observer";
const Main = ({ imageSrc }) => {
  return (
    <div className="mainContainer ">
      <img src={imageSrc} alt="pic" className="mainImage" />
      <div className="mainTitle">
        “Cooking is like love. It should be entered into with abandon or not at
        all.”
      </div>
    </div>
  );
};

export default Main;
