/**
 * @desc - Processing all environment variable through signle function only
 * @returns{object} - Returns a JSON object with a environment variable which are included in the .env file.
 */

import dotenv from 'dotenv';
dotenv.config();


function processEnvironmentVariables() {
    return process.env;
};

const processEnvVar = processEnvironmentVariables();
export default processEnvVar;