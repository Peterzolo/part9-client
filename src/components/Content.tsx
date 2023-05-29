import React from "react";
import { CoursePart } from "../interface/interface";
import ContentItem from "./ContentItem";

interface IContent {
  courseParts: CoursePart[];
}

const Content: React.FC<IContent> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((coursePart, index) => (
        <ContentItem
          key={index}
          name={coursePart.name}
          exerciseCount={coursePart.exerciseCount}
        />
      ))}
    </div>
  );
};

export default Content;
