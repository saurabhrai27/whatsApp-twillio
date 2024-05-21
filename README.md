# whatsApp-twillio

This project is a Node.js and Express application that integrates with Twilio to handle incoming and outgoing messages from whatsapp.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/saurabhrai27/whatsapp-twilio-integration.git
    ```

2. Navigate to the project directory:

    ```bash
    cd whatsapp-twilio-integration
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add the following environment variables to the `.env` file:

        ```plaintext
        TWILIO_ACCOUNT_SID=your_twilio_account_sid
        TWILIO_AUTH_TOKEN=your_twilio_auth_token
        TWILIO_NUMBER=your_twilio_number
        ```

    Replace the above variables with your actual values.

## Usage

To run the application, execute:

```bash
npm run start

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.