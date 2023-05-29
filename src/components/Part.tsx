import React from "react";
import { CoursePart } from "../interface/interface";

const Part: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => {
  const { name, exerciseCount } = coursePart;

  let additionalInfo = null;

  switch (coursePart.kind) {
    case "basic":
      additionalInfo = null;
      break;
    case "group":
      additionalInfo = `Group Project Count: ${coursePart.groupProjectCount}`;
      break;
    case "background":
      additionalInfo = `Background Material: ${coursePart.backgroundMaterial}`;
      break;
    case "special":
      additionalInfo = `Requirements: ${coursePart.requirements.join(", ")}`;
      break;
    default:
      additionalInfo = null;
      break;
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Exercise Count: {exerciseCount}</p>
      {additionalInfo && <p>{additionalInfo}</p>}
    </div>
  );
};

export default Part;
