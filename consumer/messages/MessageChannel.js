const { connect } = require("amqplib")

let _channel = null;

const _createMessageChannel = async () => {

    try {
        const connection = await connect(process.env.AMQP_SERVER);
        this._channel = await connection.createChannel();
        await this._channel.assertQueue(process.env.QUEUE_NAME);

    } catch (error) {
        console.log("Connection to RabbitMQ failed");
        console.log(error);
    }

}

const consumeMessages = async () => {

    await _createMessageChannel();

    if (this._channel) {
        this._channel.consume(process.env.QUEUE_NAME, async msg => {
            const myObj = JSON.parse(msg.content.toString());
            console.log('Message received');
            console.log(myObj);
            this._channel.ack(msg);
        });
    }
}

module.exports = {
    consumeMessages
}