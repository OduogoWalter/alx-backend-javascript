export default function getStudentIdsSum () {
    return  students.reduce((agg, student) => agg + student.id, 0);
}
