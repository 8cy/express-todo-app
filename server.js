const express = require('express');
const mongoose = require('mongoose');
const TodoItem = require('./models/todoItem');
require('dotenv').config(); // for global var things like mongodb uri
const app = express();

// connect to db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected to MongoDB database.'))
    .catch(err => console.log(err));

// set view engine as ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); // only here so it can work

// index
app.get('/', async (req, res) => {
    const todoItems = await TodoItem.find();
    res.render('index', { todoItems: todoItems });
});

// if 404, redir to root
app.get('*', (req, res) => {
    res.redirect('/');
});

// create new db entry on post
app.post('/todoItems', async (req, res) => {
    await TodoItem.create({ _id: mongoose.Types.ObjectId(), item: req.body.todoItem, date: new Date() });
    
    res.redirect('/');
});

app.listen(process.env.PORT || 1337);
console.log(`Listening on port ${process.env.PORT}.`); // honestly have no idea why it says port as undefined fix this when u feel like it )