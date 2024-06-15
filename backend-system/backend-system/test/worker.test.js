const chai = require('chai');
const worker = require('../src/worker'); // Adjust the path as needed

const expect = chai.expect;

describe('Worker Process', () => {
    it('should process requests sequentially', async () => {
        const result = await worker.processRequest({ type: 'test', payload: 'data' });
        expect(result).to.equal('processed');
    });
});
