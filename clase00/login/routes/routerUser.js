
const { Router } = require('express');
const router = Router();
const userLogin = require('../controller/userController')


router.post('/', userLogin); 

module.exports = router;