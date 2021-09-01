const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/apply/apply-page.html'));
})

router.post('/', (req, res) => {
    const response;
    switch (parseInt(req.body.formNum)) {
        case 0:
            checkForm1(req.body, response);
            break;
        case 1:
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
