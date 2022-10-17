const express = require('express');
const router = express.Router();

const {getImage, postImage, upload} = require('../controller/uploadcontroller')

router.get("/upload", getImage);

router.post('/upload', upload, postImage)

module.exports = router;