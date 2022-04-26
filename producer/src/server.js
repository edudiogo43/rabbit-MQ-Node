const { config } = require('dotenv');
const { createMessageChannel } = require('./messages/messageChannel');
config();

const generateBitCoinsData = async () => {

    const messageChannel = await createMessageChannel();

    if(messageChannel) {
        let bitCoins = [];
        bitCoins.push({symbol: 'BTC', value: '197.691,87' });

        const name = bitCoins[0].symbol;
        const price = bitCoins[0].value;
        console.log(`BitCoin ${name} has a price of: ${price}`);

        const bitCoinJson = JSON.stringify(bitCoins);
        messageChannel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(bitCoinJson));

    }

}

generateBitCoinsData();