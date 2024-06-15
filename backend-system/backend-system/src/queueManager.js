const amqp = require('amqplib/callback_api');

const createQueue = (userId) => {
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) throw error0;
        connection.createChannel((error1, channel) => {
            if (error1) throw error1;
            const queue = `queue_${userId}`;
            channel.assertQueue(queue, { durable: false });
            console.log(`Queue created: ${queue}`);
        });
    });
};

const enqueue = (req, res) => {
    const userId = req.user;
    const message = req.body.message;
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) throw error0;
        connection.createChannel((error1, channel) => {
            if (error1) throw error1;
            const queue = `queue_${userId}`;
            channel.sendToQueue(queue, Buffer.from(message));
            console.log(`Message sent to ${queue}: ${message}`);
            res.json({ message: 'Request queued' });
        });
    });
};

module.exports = { createQueue, enqueue };
