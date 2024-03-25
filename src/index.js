import {PORT} from "./config/server-config.js"
import {Logger} from "./config/logger-config.js"
import  express from "express";
import apiRoutes from"./routes/index.js";
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", apiRoutes); 

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
  Logger.info("Successfully started the Server!", "root");
});


