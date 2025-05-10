const express = require('express');
const mongoose = require('mongoose');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/shop')
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.error("MongoDB error ❌", err));

app.use(express.json());

// ثبت مسیر API
app.use('/api/stats', statsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
