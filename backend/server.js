<<<<<<< HEAD
// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
=======
const express = require('express');
const dotenv = require('dotenv');
>>>>>>> 6bb454d241aea38e1212c46af7f527310556f3e8
const apiRoutes = require('./routes/apiRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('StockEase backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
=======
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
>>>>>>> 6bb454d241aea38e1212c46af7f527310556f3e8
});
