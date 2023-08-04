export default function getStudentIdsSum(students) {
  return Array.isArray(students)
    ? students.reduce((total, curStudent) => total + curStudent.id, 0)
    : 0;
}
