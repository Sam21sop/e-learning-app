import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import processEnvVar from './utils/processEnvVariables.js';


const CORS_ORIGIN = processEnvVar.CORS_ORIGIN || '*';

const app = express();


// middleware
app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "10kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit:"16kb"
}));

app.use(cookieParser())

app.use(express.static("public"))



// routers 

app.get('/', (req, res) => {
    res.send("Hello developer !")
})






export default app;