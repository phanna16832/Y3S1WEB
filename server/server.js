const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});


app.get('/users', (req, res) => {
    res.send('<h1>Hello users</h1>');
});

app.get('/user', (req,res) =>{
   const user = {
        name: 'Phanna',
        age: 20
    };
    res.json(user);
})

app.get('/coffee', (req , res) =>{
    
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});