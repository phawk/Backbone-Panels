define(
["chai", "backbone", "sinon-chai", "../../lib/jspanels"],
function(chai, Backbone, sinon_chai, panels) {

    var expect = chai.expect,
        env;

    chai.use(sinon_chai);

    describe("JS Panels", function() {
        beforeEach(function() {
            env = {};
            env.sb = sinon.sandbox.create();
        });

        afterEach(function() {
            env.sb.restore();
        });

        it("exists", function() {
            expect(panels).to.be.an("object");
        });

        describe("#create", function() {
            it("exists", function() {
                expect(panels).to.respondTo("create");
            });

            it("returns a paenl", function() {
                expect(panels.create()).to.be.an("object");
            });
        });
    });

});
