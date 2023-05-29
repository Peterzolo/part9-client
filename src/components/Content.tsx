import React from "react";
import ContentItem from "./ContentItem";
import { CoursePart } from "../interface/interface";

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((coursePart, index) => (
        <ContentItem key={index} coursePart={coursePart} />
      ))}
    </div>
  );
};

export default Content;
