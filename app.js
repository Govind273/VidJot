const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;

//Initiate the mongoDB 
mongoose.connect('mongodb://localhost/vidjot-dev', {
})
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err));

//Import the Idea Model into the app.js
require('./models/Ideas');
const Idea = mongoose.model('ideas');

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/',(req,res) => {
    const myStory ='I will be the best Person I would know';
    res.render('index',{
        value1 : myStory
    });
});

app.get('/about',(req,res) => {    
    res.render('about',{
    });
});

const port = 5000;

app.listen(5000, ()=>{
    console.log(`Server Started on port ${port}`);
});