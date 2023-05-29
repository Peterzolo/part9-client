interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CourseDes {
  //   description: string;
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CourseDes {
  //   description: string;
  backgroundMaterial: string;
  kind: "background";
}

interface CourseDes extends CoursePartBase {
  description: string;
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground;
