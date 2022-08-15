import prisma from "../database.js";
import { students } from "@prisma/client";

export type student = Omit<students, "id" >;
export type updateStudent = Omit<students, "id" | "userId" >;

export async function insert(student: student) {
    await prisma.students.create({data: student});
}

export async function verifyStudentByName(name: string, userId: number) {
    const answer = await prisma.students.findFirst({where: {name: name,  userId: userId}});
    return answer;
}

export async function getStudents(userId: number) {
    const answer = await prisma.students.findMany({where: {userId: userId}});
    return answer;
}

export async function getStudentById(studentId: number) {
    const answer = await prisma.students.findUnique({where: {id: studentId}});
    return answer;
}

export async function deleteStudentById(studentId: number) {
    await prisma.students.delete({where: {id: studentId}});
}

export async function updateStudent(studentInfos: updateStudent, studentId: number) {
    await prisma.students.update({where: {id: studentId}, data: studentInfos})
}