const express = require('express');
const app = express();

// Define a route for the root URL "/"
app.get('/', (req, res) => {
    res.send('<h3>Hello World</h3><p>This test page tests Github Action CI</p>');
});

// Export app for testing
module.exports = app;

// Start the server
if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port http://localhost:3000'));
}
