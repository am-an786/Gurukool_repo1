const jwt = require('jsonwebtoken');

const users = { 'user1': 'password1', 'user2': 'password2' }; // Replace with real user data

const login = (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, 'secret_key', (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                req.user = decoded.username;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};

module.exports = { login, authenticate };
