// const express = require("express");  // common js
import express from 'express';   // module js  - to assemble the file

const app = express();

// middlewares
app.use(express.static('dist'));

// app.get('/', (req,res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: 'This is a joke'
        },
        {
            id: 2,
            title: "A second joke",
            content: 'This is a second joke'
        },
        {
            id: 3,
            title: "A third joke",
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: "A fourth joke",
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: "A fifth joke",
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});