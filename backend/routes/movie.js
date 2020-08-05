const express = require('express');
const router = express.Router();
const movies = require('../data/movie.json');
const fs = require('fs');
const path = require('path');

router.get('/', (req,res) => {
    res.send(movies);
});

router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter((movie) => {
        return movie.id === id;
    });
    res.send(movie);
});

router.post('/upload', (req, res) => {
    let movie = req.body;
    movie.year = Number(movie.year);

    const myPath = path.join(__dirname, '..', 'data', 'movie.json');

    fs.readFile(myPath, 'utf8', (err, data)=>{
        let parsedData = JSON.parse(data);
        parsedData.push(movie);

        fs.writeFile(myPath, JSON.stringify(parsedData), (err)=>{
            if (err) throw err;
            console.log('movies update complete!');
            res.send('end');
        });
    });
});

router.post('/edit', (req, res) => {
    let movie = req.body;
    movie.year = Number(movie.year);

    const myPath = path.join(__dirname, '..', 'data', 'movie.json');
   
    fs.readFile(myPath, 'utf8', (err, data)=>{
        let parsedData = JSON.parse(data);

        // parsedData.push(movie);
        parsedData[movie.id - 1] = movie
        
        fs.writeFile(myPath, JSON.stringify(parsedData), (err)=>{
            if (err) throw err;
            console.log('movies update complete!');
            res.send('end');
        });
        
    });
});

module.exports = router;