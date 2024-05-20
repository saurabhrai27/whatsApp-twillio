const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/webhook', messageController.handleIncomingMessage);
router.post('/send', messageController.sendMessage);

module.exports = router;