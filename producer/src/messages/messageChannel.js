const { connect } = require("amqplib");

const createMessageChannel = async () => {

    try {

        const connection = await connect(process.env.AMQP_SERVER);
        const channel = await connection.createChannel();
        await channel.assertQueue(process.env.QUEUE_NAME);
        console.log('Connected to RabbitMQ server successfully!');
        return channel;

    } catch (error) {
        console.log("Error trying to connect on RabbitMQ server");
        console.log(error);
        return null;
    }

}

module.exports = {
    createMessageChannel
}