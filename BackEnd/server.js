const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

const PORT = 5000;

connectDB();

app.get('/', (req, res) => res.send('API Running'));

//Sign Up
app.use('/api/users', require('./routes/api/users'));
//Sign In
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
