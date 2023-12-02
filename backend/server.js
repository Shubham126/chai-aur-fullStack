// const express = require('express');
import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready')
});

//get a list of 5 jokes

app.get('/api/jokes', (req, res)=>{
    const jokes = [
    {
        id: 1,
        title:'A Joke',
        content:'This is a Joke',
    },
    {
        id: 2,
        title:'Another Joke',
        content:'This is another Joke',
    },
    {
        id: 3,
        title:'A Third Joke',
        content:'This is the third Joke',
    },
    {
        id: 4,
        title:'A Fourth Joke',
        content:'This is the fourth Joke',
    },
    {
        id: 5,
        title:'A Fifth Joke',
        content:'This is the fifth Joke',
    }
]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server listing on port ${port}`)
})