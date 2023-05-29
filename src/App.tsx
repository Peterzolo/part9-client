import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

import { courseParts } from "./data";
import { CoursePart } from "./interface/interface";

const courseName: string = "Half Stack application development";

const total: number = courseParts.reduce(
  (accumulator: number, coursePart: CoursePart) =>
    accumulator + coursePart.exerciseCount,
  0
);

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header courseName={courseName} />
        <Content courseParts={courseParts} />
        <Total total={total} />
      </div>
    </>
  );
};

export default App;
