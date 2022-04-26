const { Channel, connect } = require("amqplib")

let channel = null;

const createMessageChannel = async () => {

    try {
        const connection = await connect(process.env.AMQP_SERVER);
        this.channel = await connection.createChannel();
        await channel.assertQueue(process.env.QUEUE_NAME);

    } catch (error) {
        console.log("Connection to RabbitMQ failed");
        console.log(error);
    }

}

const consumeMessages = async () => {

    await createMessageChannel();

    if (this.channel) {
        this.channel.consume(process.env.QUEUE_NAME, async msg => {
            const myObj = JSON.parse(msg.content.toString());
            console.log('Message received');
            console.log(myObj);
            this.channel.ack(msg);
        });
    }
}

module.exports = {
    consumeMessages
}