const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/apply/apply-page.html'));
})

router.post('/', (req, res) => {
    // switch (req) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    console.log(req);
    res.status(200)
})

module.exports = router;
