import { Decimal } from "@prisma/client/runtime";
import { verifyStudentByName, insert } from "../repositories/studentRepository.js";
import { conflictError } from "../utils/errorUtils.js";
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