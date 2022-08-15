import joi from "joi";

const newStudentSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().integer().required(),
    weight: joi.number().required(),
    height: joi.number().required(),
    objective: joi.string().required(),
    comments: joi.string().allow('').optional(),
});

const studentSchema = {
    newStudentSchema
}

export default studentSchema;