import express from "express";
import Connection from "./Database/db.js";
import listRoutes from "./Routes/listRoutes.js";
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use("/list", listRoutes);

//to stablish connections
Connection();

//to start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
