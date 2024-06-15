const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); // Adjust the path as needed

chai.use(chaiHttp);
const expect = chai.expect;

describe('User Authentication', () => {
    it('should authenticate a user', (done) => {
        chai.request(app)
            .post('/login')
            .send({ username: 'testuser', password: 'password' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });
});
