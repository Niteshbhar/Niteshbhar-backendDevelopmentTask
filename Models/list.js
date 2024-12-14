import mongoose from "mongoose";
const listSch = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});
const listData = mongoose.model("listData", listSch);
export default listData;
