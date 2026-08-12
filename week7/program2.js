const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>Registration Form</h2>

        <form action="/register" method="POST">

            <label>Username:</label>
            <input type="text" name="username"><br><br>

            <label>Age:</label>
            <input type="number" name="age"><br><br>

            <button type="submit">Register</button>

        </form>
    `);
});

app.post('/register', (req, res) => {
    const { username, age } = req.body;

    if (!username || username.length < 3) {
        return res.send('Username must be at least 3 characters long');
    }

    if (!age || age < 18) {
        return res.send('You must be at least 18 years old');
    }

    res.send(`Registration successful! Welcome ${username}`);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});