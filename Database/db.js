import mongoose from "mongoose";
const Mongo_Url =
  "mongodb+srv://add your mongodb server link";

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
