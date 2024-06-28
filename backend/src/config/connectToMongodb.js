import mongoose from 'mongoose';
import processEnvVar from '../utils/processEnvVariables.js';
import { DB_NAME } from '../constants.js';

const DB_URI = processEnvVar.MONGO_DB_URI;

const connectToMongoDB = async () => {
    try {
        const db = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
        console.log(`Mongo DB connected, Host:${db.connection.host}, Port:${db.connection.port}`);
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
};

export default connectToMongoDB;