const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

const client = twilio(accountSid, authToken);

async function processIncomingMessage(messageBody) {
    try {
        // write your own logic
    } catch (error) {
        console.error('Error while processing incoming message:', error.message);
        throw new Error('Failed to process incoming message');
    }
  }

async function sendMessage(recipient, message) {
  try {
    const response = await client.messages.create({
      body: message,
      from: `whatsapp:${twilioNumber}`,
      to: `whatsapp:${recipient}`,
    });
  } catch (error) {
    console.error('Error sending message:', error.message);
    throw new Error('Failed to send message');
  }
}

module.exports = {
  processIncomingMessage,
  sendMessage
};
