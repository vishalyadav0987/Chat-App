const express = require('express');
const router = express.Router();
const { getAllUser } = require('../controllers/user.controller');
const protectRouteMiddleware = require('../middleware/protectRoute');


router.get('/', protectRouteMiddleware, getAllUser);
module.exports = router;