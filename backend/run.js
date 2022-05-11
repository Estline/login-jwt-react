const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors())

const users = [
    {
        username: 'est1',
        password: 'est1',
        role: 'admin'
    }, {
        username: 'est2',
        password: 'est2',
        role: 'member'
    }
];

const accessTokenSecret = 'Refunappapi';

app.post('/login', (req, res) => {
    // read username and password from request body
    const { username, password } = req.body;

    // filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '10m' });

        res.json({
            Token: accessToken,
        });
    } else {
        res.send('Username or password incorrect');
    }
});

app.post('/ck_login', (req, res) => {
    // read username and password from request body

    const { Token } = req.body

    // res.send(Token)

    jwt.verify(Token, accessTokenSecret, (err, user) => {
        if (err) {
            console.log(err)
            return res.json({ login: false })
            // return res.sendStatus(403);
        }
        const { username, role } = user;
        return res.json({ username, role });
    });
});



app.listen(5000, () => {
    console.log('Server started on port 5000');
})
