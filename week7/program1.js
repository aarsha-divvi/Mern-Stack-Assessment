const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });
});

app.post('/register', (req, res) => {
    const { username, age } = req.body;

    let error = null;

    if (!username || username.length < 3) {
        error = 'Username must be at least 3 characters long';
    } else if (!age || age < 18) {
        error = 'You must be at least 18 years old';
    }

    if (error) {
        return res.render('index', {
            title: 'Registration Failed',
            error: error,
            user: null
        });
    }

    res.render('index', {
        title: 'Registration Successful',
        error: null,
        user: username
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});