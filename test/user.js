process.env.NODE_ENV = 'test'

import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../src/server'
import chaiShould from chai.should

chai.use(chaiHttp)

/*
* Test the POST route
*/
describe(`POST users`, () => {
    it('should POST a user', (done) => {
        let user = {
            name: 'José da Silva',
            email: 'jose@example.com'
        }
        chai.request(server)
            .post(`/users`)
            .send(user)
            .end((err, res) => {
                res.chaiShould.have.status(200)
                res.body.should.be.a(`object`)
                res.body.user.should.have.property('name')
                res.body.user.should.have.property('email')
                res.body.user.should.have.property('password')
            done()
            })
    })
})

/*
* https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
* https://mherman.org/blog/test-driven-development-with-node/
*/
