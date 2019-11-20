let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let app = require("../server");
//Our parent block
describe("Events", () => {
    describe("/GET events", () => {
    it("it should GET all the events", (done) => {
        chai.request(app)
            .get("/events")
            .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a("object");
                (res.body.events.length).should.be.eql(1);
                done();
            });
    });
});


});
