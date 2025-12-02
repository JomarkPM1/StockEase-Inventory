const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/apiController');

// GET: Read all categories
router.get('/categories', getCategories);
// GET: Read single category by ID
router.get('/categories/:id', getCategoryById);
// POST: Create category
router.post('/categories', createCategory);
// PUT: Update category
router.put('/categories/:id', updateCategory);
// DELETE: Delete category
router.delete('/categories/:id', deleteCategory);

// GET: Read all products
router.get('/products', getProducts);
// GET: Read single product by ID
router.get('/products/:id', getProductById);
// POST: Create product
router.post('/products', createProduct);
// PUT: Update product
router.put('/products/:id', updateProduct);
// DELETE: Delete product
router.delete('/products/:id', deleteProduct);

// GET: Read all users
router.get('/users', getUsers);
// GET: Read single user by ID
router.get('/users/:id', getUserById);
// POST: Register user
router.post('/users/register', registerUser);
// PUT: Update user
router.put('/users/:id', updateUser);
// DELETE: Delete user
router.delete('/users/:id', deleteUser);

module.exports = router;
