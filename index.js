const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- STATIC FILES MIDDLEWARE ---
// --- SECURITY & PERMISSIONS HEADERS ---
// API for prayer requests
app.post('/api/prayer-request', (req, res) => {
    console.log("New Prayer Request Received:", req.body);
    // In a no-database setup, you would typically integrate a service like 
    // Formspree, SendGrid, or simply log it here.
    res.json({ message: 'Request logged successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
