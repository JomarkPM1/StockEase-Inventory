<<<<<<< HEAD
// backend/routes/apiRoutes.js
=======
>>>>>>> 6bb454d241aea38e1212c46af7f527310556f3e8
const express = require('express');
const router = express.Router();

const {
<<<<<<< HEAD
  getCategories,
  getProducts,
  getUsers,
  getProductById,
  registerUser,
  loginUser, // <--- ADDED TO IMPORTS
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/apiController');

// GET ROUTES (READ)
router.get('/categories', getCategories);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/users', getUsers);

// POST ROUTES (CREATE & AUTH)
router.post('/users/register', registerUser);
router.post('/users/login', loginUser); // <--- NEW LOGIN ROUTE
router.post('/products', createProduct);

// PUT/DELETE ROUTES (UPDATE/DELETE)
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
=======
  getCategories,
  getProducts,
  getUsers
} = require('../controllers/apiController');

router.get('/categories', getCategories);
router.get('/products', getProducts);
router.get('/users', getUsers);

module.exports = router;
>>>>>>> 6bb454d241aea38e1212c46af7f527310556f3e8
