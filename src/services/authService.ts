import { newUser, insert, verifyEmail } from "../repositories/authRepository.js";
import { sessionSchema, creatSession } from "../repositories/sessionRepository.js";
import { encrypt, verifyPassword } from "../utils/bcrypt.js"
import { tokenGenerator } from "../utils/tokenGenerator.js"
import { conflictError, notFoundError } from "../utils/errorUtils.js";

export async function signUpService(name: string, email: string, password: string) {
    const validateEmail = await verifyEmail(email);

    if(validateEmail != undefined) {
        throw conflictError("Email already in use");
    }

    const passwordEncrypted = encrypt(password);
    const user : newUser = {
        name,
        email,
        password: passwordEncrypted
    };
    
    await insert(user);
}

export async function signInService(email: string, password: string) {
    const validateEmail = await verifyEmail(email);
    if(validateEmail == undefined) {
        throw notFoundError("User not found");
    }
    
    const passwordEncrypted = validateEmail.password;
    verifyPassword(password, passwordEncrypted);

    const userId = validateEmail.id;
    const token = tokenGenerator(userId, email);

    const session : sessionSchema = {
        userId,
        token
    };

    await creatSession(session);

    const answer = {
        token,
        name: validateEmail.name
    }

    return answer;
}
