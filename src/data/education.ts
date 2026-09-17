export interface EducationEntry {
  id: string;
  institution: string;
  program: string;
  startDate?: string;
  endDate?: string;
  location: string;
  details?: readonly string[];
  coursework?: readonly string[];
  sortOrder?: number;
}

export const education: readonly EducationEntry[] = [
  {
    id: "mount-royal-university",
    institution: "Mount Royal University",
    program: "Bachelor of Science, Computer Science (In Progress)",
    startDate: "September 2024",
    endDate: "April 2028",
    location: "Calgary, AB",
    coursework: [
      "Foundations of Software Engineering",
      "Problem Solving in Python",
      "Problem Solving in C++",
      "Algorithms and Information Data Structures in JavaScript",
      "Computing Machinery in Assembly",
      "Databases in SQL",
      "Symbolic Logic and Algebra",
      "Linear Algebra",
      "Calculus",
    ],
    sortOrder: 1,
  },
  {
    id: "ernest-manning-high-school",
    institution: "Ernest Manning High School",
    program: "High School Diploma",
    startDate: "September 2021",
    endDate: "June 2024",
    location: "Calgary, AB",
    coursework: [
      "Physics 30",
      "Chemistry 30",
      "Math 30-1",
      "Calculus (Math 31)",
      "English 30-1",
    ],
    sortOrder: 2,
  },
];

export const sortedEducation = [...education].sort(
  (a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER),
);
