import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
import { CoursePart } from "./interface/interface";

const courseName: string = "Half Stack application development";

const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
  },
];

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
