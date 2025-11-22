import 'dotenv/config';
import Joi, * as joi from 'joi';

interface EnvVars {
    PORT: number;
    DATABASE_URL: string;

    MS_USUARIOS_HOST: string;
    MS_USUARIOS_PORT: number;

    
}


const envVarsSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    MS_USUARIOS_HOST: joi.string().required(),
    MS_USUARIOS_PORT: Joi.number().required()
}).unknown(true);

const { error, value} = envVarsSchema.validate(process.env);
console.log(value);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL,
    usuariosMServicesHost: envVars.MS_USUARIOS_HOST,
    usuariosMServicesPort: envVars.MS_USUARIOS_PORT
};