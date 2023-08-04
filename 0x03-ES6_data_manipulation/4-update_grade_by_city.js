export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students.reduce((updatedStudents, student) => {
      if (student.location === city) {
        const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
        const grade = matchingGrade ? matchingGrade.grade : defaultGrade.grade;

        updatedStudents.push({
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade,
        });
      }
      return updatedStudents;
    }, []);
  }

  return [];
}
