const amqp = require('amqplib/callback_api');

const startWorker = (userId) => {
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) throw error0;
        connection.createChannel((error1, channel) => {
            if (error1) throw error1;
            const queue = `queue_${userId}`;
            channel.consume(queue, (msg) => {
                console.log(`Received message from ${queue}: ${msg.content.toString()}`);
                // Process the request
                channel.ack(msg);
            });
        });
    });
};

module.exports = { startWorker };
