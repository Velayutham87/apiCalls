const express = require('express');
const app = express();
const PORT = 3000;
const { faker } = require('@faker-js/faker');

app.use(express.json());

let users = [{"id": 1, "name": "abc"},{"id": 2, "name": "def"},{"id": 3, "name": "ghi"}]

app.get('/', (req,res) => {
    res.send('Welcome to the API server!');
})

//list all users
app.get('/users', (req, res) => {
    res.json(users);
}
);

//get user by id
app.get('/users/:id', (req, res) => {
    console.log(JSON.stringify(req.body));
    const user = users.find(u => u.id === Number(req.params.id));
    if(!user) {
        return res.status(404).json({error: 'User not found'});
    }
    res.json(user);
})

//create a new user
app.post('/users', (_, res) => {
    const newUser = {
        id: users.length + 1,
        name: faker.person.firstName() + ' ' + faker.person.lastName()
    };
    users.push(newUser);
    res.status(201).json({message: 'User created successfully', data: newUser});
})

//submit a new user
app.post('/users/submit', (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is required' });
        }

        const newUser = {
            id: users.length + 1,
            name: req.body.name || (faker.person.firstName() + ' ' + faker.person.lastName())
        };
        
        users.push(newUser);
        res.status(201).json({ message: 'User submitted successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})