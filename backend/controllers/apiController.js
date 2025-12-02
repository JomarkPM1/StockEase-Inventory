const pool = require('../db');
const bcrypt = require('bcrypt');

// READ categories
const getCategories = (req, res) => {
  pool.query('SELECT * FROM categories', (error, results) => {
    if (error) return res.status(500).json({ error });
    res.json(results);
  });
};

// READ single category by ID
const getCategoryById = (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM categories WHERE category_id = ?', [id], (error, results) => {
    if (error) return res.status(500).json({ error });
    if (results.length === 0) return res.status(404).json({ message: 'Category not found' });
    res.json(results[0]);
  });
};

// CREATE category
const createCategory = (req, res) => {
  const { category_name, description } = req.body;
  if (!category_name) return res.status(400).json({ message: 'Category name is required.' });
  pool.query(
    'INSERT INTO categories (category_name, description) VALUES (?, ?)',
    [category_name, description],
    (error, result) => {
      if (error) return res.status(500).json({ error });
      res.status(201).json({ message: 'Category created successfully', category_id: result.insertId });
    }
  );
};

// UPDATE category
const updateCategory = (req, res) => {
  const id = req.params.id;
  const { category_name, description } = req.body;
  pool.query(
    'UPDATE categories SET category_name = ?, description = ? WHERE category_id = ?',
    [category_name, description, id],
    (error, result) => {
      if (error) return res.status(500).json({ error });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
      res.json({ message: 'Category updated successfully' });
    }
  );
};

// DELETE category
const deleteCategory = (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM categories WHERE category_id = ?', [id], (error, result) => {
    if (error) return res.status(500).json({ error });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  });
};

// READ products all
const getProducts = (req, res) => {
  pool.query('SELECT * FROM products', (error, results) => {
    if (error) return res.status(500).json({ error });
    res.json(results);
  });
};

// READ single product by ID
const getProductById = (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM products WHERE product_id = ?', [id], (error, results) => {
    if (error) return res.status(500).json({ error });
    if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
};

// READ users without passwords
const getUsers = (req, res) => {
  pool.query('SELECT user_id, username, email, created_at FROM users', (error, results) => {
    if (error) return res.status(500).json({ error });
    res.json(results);
  });
};

// READ single user by ID
const getUserById = (req, res) => {
  const id = req.params.id;
  pool.query('SELECT user_id, username, email, created_at FROM users WHERE user_id = ?', [id], (error, results) => {
    if (error) return res.status(500).json({ error });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(results[0]);
  });
};

// CREATE user (Registration)
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ message: 'All fields are required.' });
  try {
    const existingUser = await pool.query('SELECT user_id FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) return res.status(409).json({ message: 'User with this email already exists.' });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await pool.query('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully', user_id: result.insertId });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};

// UPDATE user (excluding password)
const updateUser = (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  pool.query(
    'UPDATE users SET username = ?, email = ? WHERE user_id = ?',
    [username, email, id],
    (error, result) => {
      if (error) return res.status(500).json({ error });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User updated successfully' });
    }
  );
};

// DELETE user
const deleteUser = (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM users WHERE user_id = ?', [id], (error, result) => {
    if (error) return res.status(500).json({ error });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  });
};

// CREATE product
const createProduct = (req, res) => {
  const { product_name, category_id, price, quantity } = req.body;
  if (!product_name || !category_id || price == null || quantity == null) return res.status(400).json({ message: 'All fields are required.' });
  pool.query(
    'INSERT INTO products (product_name, category_id, price, quantity) VALUES (?, ?, ?, ?)',
    [product_name, category_id, price, quantity],
    (error, result) => {
      if (error) return res.status(500).json({ error });
      res.status(201).json({ message: 'Product created successfully', product_id: result.insertId });
    }
  );
};

// UPDATE product
const updateProduct = (req, res) => {
  const id = req.params.id;
  const { product_name, category_id, price, quantity } = req.body;
  pool.query(
    'UPDATE products SET product_name = ?, category_id = ?, price = ?, quantity = ? WHERE product_id = ?',
    [product_name, category_id, price, quantity, id],
    (error, result) => {
      if (error) return res.status(500).json({ error });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
      res.json({ message: 'Product updated successfully' });
    }
  );
};

// DELETE product
const deleteProduct = (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM products WHERE product_id = ?', [id], (error, result) => {
    if (error) return res.status(500).json({ error });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  });
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getProducts,
  getProductById,
  getUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  createProduct,
  updateProduct,
  deleteProduct
};
