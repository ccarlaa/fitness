import prisma from "../database.js";
import { students } from "@prisma/client";

export type student = Omit<students, "id" >;

export async function insert(student: student) {
    await prisma.students.create({data: student});
}

export async function verifyStudentByName(name: string, userId: number) {
    const answer = await prisma.students.findFirst({where: {name: name,  userId: userId}});
    return answer;
}