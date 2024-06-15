const express = require('express');
const bodyParser = require('body-parser');
const { authenticate, login } = require('./auth');
const { enqueue } = require('./queueManager');

const app = express();
app.use(bodyParser.json());

app.post('/login', login);
app.post('/enqueue', authenticate, enqueue);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
