const express = require('express');
const router = express.Router();
const { sendMessage, getMessage } = require('../controllers/message.controller');
const protectRouteMiddleware = require('../middleware/protectRoute')


router.post('/send/:id', protectRouteMiddleware, sendMessage); // this id of kisko message send karna hai
router.get('/:id',protectRouteMiddleware, getMessage);


module.exports = router;