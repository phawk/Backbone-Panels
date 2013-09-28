define(
["chai", "jquery", "backbone", "sinon-chai", "jquery-chai", "../../lib/jspanels"],
function(chai, $, Backbone, sinon_chai, jquery_chai, panels) {

    var expect = chai.expect,
        env;

    chai.use(sinon_chai);
    chai.use(jquery_chai);

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
            beforeEach(function() {
                env.app_el = $("<div>");
            });

            it("exists", function() {
                expect(panels).to.respondTo("create");
            });

            it("returns a paenl", function() {
                expect(panels.create()).to.be.an("object");
            });

            describe("when setting options", function() {
                beforeEach(function() {
                    env.panel = panels.create({
                        el: env.app_el,
                        className: "custom-panel",
                    });
                });

                it("sets the element", function() {
                    expect(env.panel.$el).to.eql(env.app_el);
                });

                it("sets the className", function() {
                    expect(env.panel.$el).to.have.class("custom-panel");
                });
            });
        });
    });

});
