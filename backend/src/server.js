// server.js
const express = require('express');
const path = require('path');
const app = express();

// Parse JSON requests (if you have APIs)
app.use(express.json());

// Example: API routes (adjust as needed)
app.use('/api/users', require('./routes/users')); // example
// Add your other routes similarly

// Serve frontend static files
// Replace 'public' with your actual frontend folder name if different
app.use(express.static(path.join(__dirname, 'public')));

// For any other route, serve index.html (for SPA or standard HTML)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
