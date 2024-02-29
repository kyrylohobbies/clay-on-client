const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`, { extensions: ['html'], maxAge: 0 }));

app.get((['/','/samples','/other','/contact']), (req,res)=>{
    console.log('Entry');
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('*', (req,res)=>{res.send('<h1>404 PAGE NOT FOUND</h1>')});

app.listen(3000, console.log('SERVER RUNNING ⚙️'));