export default function getStudentsByLocation () {
    return students.filter((student) => student.location == city);
}
