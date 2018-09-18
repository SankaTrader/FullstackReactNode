const express = require('express');
const app = express('upper-case');


app.get('/', (req, res) => {
    res.send({what: 'there up'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//import express from 'express';

