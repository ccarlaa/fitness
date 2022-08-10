import prisma from "../database.js"
import { sessions } from "@prisma/client";

export type sessionSchema = Omit<sessions, "id" >;

export async function creatSession(session: sessionSchema) {
    await prisma.sessions.create({data: session});
}

export async function verifySession(token: string) {
    const sessionInfos = await prisma.sessions.findFirst({where: {token: token}});
    return sessionInfos;
}