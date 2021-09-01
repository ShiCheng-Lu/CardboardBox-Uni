const express = require('express');
const path = require('path');
const formHandler = require('./applyFormHandler');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/apply/apply-page.html'));
})

router.post('/', (req, res) => {
    console.log(req.body);

    var response;
    switch (parseInt(req.body.formNum)) {
        case 0:
            formHandler.names(req.body, response);
            break;
        case 1:
            formHandler.final(req.body, response);
            break;
        default:
            response = {
                success: false,
                message: "form number not found"
            }
            break;
    }
    res.status(200).json(response);
})

module.exports = router;
