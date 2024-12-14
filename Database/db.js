import mongoose from "mongoose";
const Mongo_Url =
  "mongodb+srv://niteshbhardwaj2001:B1XSKp0UWMAbLGoY@cluster0.15ssesm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Connection = () => {
  mongoose
    .connect(Mongo_Url)
    .then(() => {
      console.log("DB Connected");
    })
    .catch(function (error) {
      console.log("Connection error :", error);
    });
};

export default Connection;
