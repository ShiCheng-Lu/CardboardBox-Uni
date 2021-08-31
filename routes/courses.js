const express = require('express');
const path = require('path');
const all_courses = require('./courses.json');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/courses/courses-page.html'));
})

router.get('/all-courses', (req, res) => {
    console.log('tried to get all courses');
    res.status(201).json(all_courses);
})

module.exports = router;
