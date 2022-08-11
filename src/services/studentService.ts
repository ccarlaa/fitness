import { Decimal } from "@prisma/client/runtime";
import { verifyStudentByName, insert, getStudents, getStudentById, deleteStudentById, updateStudent } from "../repositories/studentRepository.js";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";
import { student } from "../repositories/studentRepository.js";

export async function newStudentService(
    userId: number,
    name: string,
    age: number,
    weight: Decimal,
    height: Decimal,
    objective: string,
    comments: string,
) {
    const verifyStudent = await verifyStudentByName(name, userId);
    if(verifyStudent != undefined) {
        throw conflictError("Já existe um estudante com esse nome.")
    }

    const studentInfos : student = {
        userId,
        name,
        age,
        weight,
        height,
        objective,
        comments
    }

    await insert(studentInfos)
}

export async function getStudentsService(userId: number) {
    const studentsList = await getStudents(userId);
    return studentsList;
}

export async function deleteStudentService(studentId: number, userId: number) {
    const studentInfos = await getStudentById(studentId);

    if(studentInfos == undefined) {
        throw notFoundError("Estudante não encontrado");
    }

    if(studentInfos.userId !== userId) {
        throw unauthorizedError("Você não tem acesso as informações desse aluno");
    }
 
    await deleteStudentById(studentId);
}

export async function updateStudentService(
    studentId: number,
    userId: number,
    name: string,
    age: number,
    weight: Decimal,
    height: Decimal,
    objective: string,
    comments: string,
) {

    const studentInfos = await getStudentById(studentId);

    if(studentInfos == undefined) {
        throw notFoundError("Estudante não encontrado");
    }

    if(studentInfos.userId !== userId) {
        throw unauthorizedError("Você não tem acesso as informações desse aluno");
    }

    const studentInfosUpdate : updateStudent = {
        name,
        age,
        weight,
        height,
        objective,
        comments
    }

    await updateStudent(studentInfosUpdate, studentId)
}