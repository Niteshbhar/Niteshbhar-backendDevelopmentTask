import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../Controller/listControl.js";
const listRoutes = express.Router();
//to create list item
listRoutes.post("/POST/tasks", createItem);

//to get all the list items
listRoutes.get("/GET/tasks", getItems);

//to get the specfic item from list
listRoutes.get("/GET/tasks/:id", getItem);

//to update the particular list item
listRoutes.put("/PUT/tasks/:id", updateItem);

//to delete the particular list item
listRoutes.delete("/Delete/tasks/:id", deleteItem);
export default listRoutes;
