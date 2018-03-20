const express = require('express');
const exphbs  = require('express-handlebars');


const app = express();

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