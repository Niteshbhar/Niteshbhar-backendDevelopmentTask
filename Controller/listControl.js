import listData from "../Models/list.js";

//to create a list item
export const createItem = async (req, res) => {
  try {
    const values = req.body;
    const data = await listData.create(values);
    //  code to save data in database goes here
    res.status(200).json({ message: "Item created successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//to get all list items
export const getItems = async (req, res) => {
  try {
    const values = await listData.find();
    const data = values;
    //  code to save data in database goes here
    res.status(200).json({ message: "list Items shown successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//to get particular list item
export const getItem = async (req, res) => {
  try {
    const Id = req.params.id;
    const value = await listData.findById(Id);
    const data = value;
    //  code to save data in database goes here
    res.status(200).json({ message: "list Item shown successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//to update particular list item
export const updateItem = async (req, res) => {
  try {
    const Id = req.params.id;
    const status = req.body.status;
    const data = await listData.findByIdAndUpdate(Id, { status: status });
    //  code to save data in database goes here
    res.status(200).json({ message: "list Item updated successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//to delete particular list item
export const deleteItem = async (req, res) => {
  try {
    const Id = req.params.id;
    const value = await listData.findByIdAndDelete(Id);

    //  code to save data in database goes here
    res.status(200).json({ message: "list Item delete successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
