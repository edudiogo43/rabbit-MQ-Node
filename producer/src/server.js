const { config } = require('dotenv');
const { createMessageChannel } = require('./messages/messageChannel');
config();

const generateBitCoinsData = async () => {

    const messageChannel = await createMessageChannel();

    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"];

    const coinRand = letters[Math.floor(Math.random() * letters.length)]+
                     letters[Math.floor(Math.random() * letters.length)]+
                     letters[Math.floor(Math.random() * letters.length)];

    const coinValue = (Math.random(1000) * 5000).toFixed(2);

    if (messageChannel) {
        let bitCoins = [];
        bitCoins.push({
            symbol: coinRand, value: coinValue
        });

        const name = bitCoins[0].symbol;
        const price = bitCoins[0].value;
        console.log(`BitCoin ${name} has a price of: ${price}`);

        const bitCoinJson = JSON.stringify(bitCoins);
        messageChannel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(bitCoinJson));

    }

}

generateBitCoinsData();