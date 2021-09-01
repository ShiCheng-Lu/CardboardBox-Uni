const express = require('express');
const path = require('path');
// const all_courses = require('./courses.json');

const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.cpv39.mongodb.net/cbu?retryWrites=true&w=majority"

var dbo;
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    dbo = db.db('cbu');
});

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/courses/courses-page.html'));
})

router.get('/all-courses', (req, res) => {
    dbo.collection("courses").find({}).toArray((err, result) => {
        res.status(201).json(result);
    });
})

router.get('/?', (req, res) => {
    
})

module.exports = router;
