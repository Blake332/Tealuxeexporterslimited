import Product from "../models/Product.js";

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ADD NEW PRODUCT
export const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ success: true, message: "Product added!" });
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true, message: "Product updated!" });
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Product deleted!" });
};
