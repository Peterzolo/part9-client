import React from "react";
import { CoursePart } from "../interface/interface";

interface IContentItem {
  coursePart: CoursePart;
}

const ContentItem: React.FC<IContentItem> = ({ coursePart }) => {
  const { name, exerciseCount } = coursePart;

  let additionalInfo = null;

  if (coursePart.kind === "group") {
    additionalInfo = `Group Project Count: ${coursePart.groupProjectCount}`;
  } else if (coursePart.kind === "background") {
    additionalInfo = `Background Material: ${coursePart.backgroundMaterial}`;
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Exercise Count: {exerciseCount}</p>
      {additionalInfo && <p>{additionalInfo}</p>}
    </div>
  );
};

export default ContentItem;
