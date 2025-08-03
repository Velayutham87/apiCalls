const express = require('express');
const app = express();
const PORT = 3000;
const { faker } = require('@faker-js/faker');
//import users from './users.json'
const fs = require('fs');

app.use(express.json());

// let users = [{ "id": 1, "name": "abc" }, { "id": 2, "name": "def" }, { "id": 3, "name": "ghi" }]

app.get('/', (req, res) => {
    // res.send('Welcome to the API server!');
    res.sendFile(__dirname + '/index.html');
})

//list all users
app.get('/users', async (req, res) => {
    const _users = await fs.readFileSync('./users.json', 'utf8');
    const data = JSON.parse(_users);
    res.json(data.users);
});

//get user by id
app.get('/users/:id', async (req, res) => { 
    //console.log(JSON.stringify(req.body));
    const _users = await fs.readFileSync('./users.json', 'utf8');
    const data = JSON.parse(_users);
    const user = data.users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
})

//create a new user
app.post('/users', async (_, res) => {
    const newUser = {
        id: users.length + 1,
        name: faker.person.firstName() + ' ' + faker.person.lastName()
    };
    users.push(newUser);
    await fs.writeFile('./users.json', JSON.stringify({ users: [...users] }, null, 2));
    res.status(201).json({ message: 'User created successfully', data: newUser });
})

//submit a new user
app.post('/users/submit', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is required' });
        }

        const newUser = {
            id: users.length + 1,
            name: req.body.name || (faker.person.firstName() + ' ' + faker.person.lastName())
        };

        users.push(newUser);
        await fs.writeFile('./users.json', JSON.stringify({ users: [...users] }, null, 2));
        res.status(201).json({ message: 'User submitted successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

//Delete a user by supplying ID
app.delete('/users/:id', async (req, res) => {
    const _users = await fs.readFileSync('./users.json', 'utf8');
    const data = JSON.parse(_users);
    data.users = data.users.filter(u => u.id !== Number(req.params.id));
    await fs.writeFile('./users.json', JSON.stringify(data, null, 2));
    res.status(204).send();
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})