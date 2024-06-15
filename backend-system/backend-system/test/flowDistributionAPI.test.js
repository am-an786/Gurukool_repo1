const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); // Adjust the path as needed

chai.use(chaiHttp);
const expect = chai.expect;

describe('Flow Distribution API', () => {
    it('should adjust flow for top astrologers', (done) => {
        chai.request(app)
            .post('/adjustFlow')
            .send({ astrologerId: 'astro1', flow: 'increase' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status').eql('success');
                done();
            });
    });
});
