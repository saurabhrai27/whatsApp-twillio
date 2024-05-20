const twilioService = require('../services/twilioService');

const { MessagingResponse } = require('twilio').twiml;

exports.handleIncomingMessage = async (req, res) => {
    try {
        const messageBody = req.body.Body;
        const sender = req.body.From;
        const twiml = new MessagingResponse();
    
        console.log(`Received message from ${sender}: ${messageBody}`);
    
        const responseMessage = await twilioService.processIncomingMessage(messageBody);
        
        twiml.message(responseMessage)
    
        // await twilioService.sendMessage(sender, responseMessage);
    
        res.type('text/xml').send(twiml.toString())
      } catch (error) {
        console.error('Error processing message:', error.message);
        res.status(500).send('Failed to process message');
      }
};

exports.sendMessage = async (req, res) => {
  const recipient = "RECIPIENT PHONE NUMBER" ;
  const message = "MESSAGE TO BE SENT";

  try {
    await twilioService.sendMessage(recipient, message);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).send('Failed to send message');
  }
};

