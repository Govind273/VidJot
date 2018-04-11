const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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


//Body Parser Middlewares
app.use(bodyParser.urlencoded({extended : false }))
app.use(bodyParser.json())


//Home route
app.get('/',(req,res) => {
    const myStory ='I will be the best Person I would know';
    res.render('index',{
        value1 : myStory
    });
});

//About Route
app.get('/about',(req,res) => {    
    res.render('about',{
    });
});

//Handling the Add Idea link
app.get('/ideas/add',(req,res) => {
    res.render('ideas/add');
});

app.post('/ideas',(req,res) =>{
    let errors = [];
    if(!req.body.title){
        errors.push({text: "Please provide a title"});
    }
    if(!req.body.details){
        errors.push({text: "Please add some details"});
    }
    if(errors.length > 0){
        res.render('ideas/add',{
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });
    }else{
        res.send('Oks');
    }
});


const port = 5000;

app.listen(5000, ()=>{
    console.log(`Server Started on port ${port}`);
});