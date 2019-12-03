//import {describe} from "mocha";


//During the test the env variable is set to test
//process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let event = require('../src/models/event');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();
chai.use(chaiHttp);
//Our parent block
/*describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => {
            done();
        });
    });
    */

    /*
      * Test the /GET route
      */
describe('/GET events', () => {
        it('it should GET all the events', (done) => {
            chai.request(app)
                .get('/api/v1/events')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(14);
                    done();
                });
        });
    });


/*
  * Test the /POST route
  */
describe('/POST events', () => {
    it('it should not POST a book without pages field', (done) => {
        let event= {
            code: "34",
            title: "noel arbre",
            description: "event noel",
        }
        chai.request(app)
            .post('/api/v1/events')
            .send(event)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                //res.body.should.have.property('errors');
                //res.body.errors.should.have.property('pages');
                //res.body.errors.pages.should.have.property('kind').eql('required');
                done();
            });
    });

});
