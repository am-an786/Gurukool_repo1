const chai = require('chai');
const queueManager = require('../src/queueManager'); // Adjust the path as needed

const expect = chai.expect;

describe('Queue Manager', () => {
    it('should create a queue for a new client', () => {
        const clientId = 'client1';
        queueManager.createQueue(clientId);
        expect(queueManager.getQueue(clientId)).to.not.be.null;
    });
});
