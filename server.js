const express = require('express');

var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    // res.send('<h1>Hello Express !!!</h1>');
    res.send({
        name: 'Jainish',
        hobbies: [
            'Driving','Football'
        ]
    });
});

app.get('/about',(req, res) => {
    // res.send('This is may be about page !!!');
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad',(req, res) => {
    res.send({
        errorMessage: 'Unable to open page !!!'
    });
});

app.listen(3000);