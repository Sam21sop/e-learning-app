import app from "./src/app.js";
import connectToMongoDB from "./src/config/connectToMongodb.js";
import { PORT } from "./src/constants.js";


app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Server listening on http://localhost:${PORT || 5000}`);
})