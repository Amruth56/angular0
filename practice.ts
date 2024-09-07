import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

const studentDetails = [
  {
    name: "scxs",
    grade: 85,
  },
  {
    name: "qwer",
    grade: 73,
  },
  {
    name: "sxcdw",
    grade: 32,
  },
  {
    name: "sdfg",
    grade: 90,
  },
];

const studentName$ = of(studentDetails).pipe(
  filter((students) => students.every((student) => student.grade >= 70)),
  map((students) => students.map((student) => student.name))
);

studentName$.subscribe(names=>console.log(names));