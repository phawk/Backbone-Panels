define(
["chai", "backbone", "sinon-chai", "jquery-chai", "backbone-panel", "../fixtures/simple_view"],
function(chai, Backbone, sinon_chai, jquery_chai, Panel, Fixture_simple_view) {

    var expect = chai.expect,
        env;

    chai.use(sinon_chai);
    chai.use(jquery_chai);

    describe("Panel", function() {
        beforeEach(function() {
            env = {};
            env.sb = sinon.sandbox.create();

            env.fixture_simple_view = new Fixture_simple_view();

            env.fixture_simple_view_two = new Fixture_simple_view();
            env.fixture_simple_view_two.$el.attr("class", "simple-view-two");

            env.fixture_simple_view_three = new Fixture_simple_view();
            env.fixture_simple_view_three.$el.attr("class", "simple-view-three");

            env.fixture_simple_view_four = new Fixture_simple_view();
            env.fixture_simple_view_four.$el.attr("class", "simple-view-three-four");

            env.panel = new Panel();
        });

        afterEach(function() {
            env.sb.restore();
            env.panel.remove();
        });

        it("exists", function() {
            expect(Panel).to.be.a("function");
            expect(env.panel).to.be.an("object");
        });

        describe(".add", function() {
            it("exists", function() {
                expect(env.panel).to.respondTo("add");
            });

            describe("adding an invlid view", function() {
                it("ignores invalid views", function() {
                    env.panel.add({ fake: "view" });
                    expect(env.panel.$el.html()).to.equal("");
                });
            });

            describe("adding a single view", function() {
                beforeEach(function() {
                    env.method_resp = env.panel.add({
                        "main": env.fixture_simple_view
                    });
                });

                it("adds the view", function() {
                    expect(env.panel.$(".simple-view")).to.exist;
                });

                it("stores the view", function() {
                    expect(env.panel.views.main).to.eql(env.fixture_simple_view);
                });

                it("returns true", function() {
                    expect(env.method_resp).to.be.true;
                });
            });

            describe("adding multiple views", function() {
                beforeEach(function() {
                    env.method_resp = env.panel.add({
                        "one": env.fixture_simple_view,
                        "two": env.fixture_simple_view_two,
                        "three": env.fixture_simple_view_three
                    });
                });

                it("adds all views", function() {
                    expect(env.panel.$(".simple-view")).to.exist;
                    expect(env.panel.$(".simple-view-two")).to.exist;
                    expect(env.panel.$(".simple-view-three")).to.exist;
                });

                it("should store the views", function() {
                    expect(env.panel.views).to.eql({
                        "one": env.fixture_simple_view,
                        "two": env.fixture_simple_view_two,
                        "three": env.fixture_simple_view_three
                    });
                });

                it("returns true", function() {
                    expect(env.method_resp).to.be.true;
                });
            });

            describe(".replace", function() {
                beforeEach(function() {
                    env.panel.add({
                        "header": env.fixture_simple_view_two,
                        "main": env.fixture_simple_view,
                        "footer": env.fixture_simple_view_four
                    });

                    env.method_resp = env.panel.replace("main", env.fixture_simple_view_three);
                });

                it("exists", function() {
                    expect(env.panel).to.respondTo("replace");
                });

                it("returns false if original view is missing", function() {
                    expect(env.panel.replace()).to.be.false;
                });

                it("stores the view", function() {
                    expect(env.panel.views["main"]).to.eql(env.fixture_simple_view_three);
                });

                it("places the view in the DOM", function() {
                    expect(env.panel.$(".simple-view-three")).to.exist;
                });

                it("removes the old view from the DOM", function() {
                    expect(env.panel.$(".simple-view")).to.not.exist;
                });

                it("keeps the view at the same index", function() {
                    expect(env.panel.$el.children().eq(1)).to.have.class("simple-view-three");
                });
            });

            describe(".remove", function() {
                beforeEach(function() {
                    env.panel.add({ "main": env.fixture_simple_view });

                    env.method_resp = env.panel.remove("main");
                });

                it("exists", function() {
                    expect(env.panel).to.respondTo("remove");
                });

                it("returns false if the view isn't present", function() {
                    expect(env.panel.remove()).to.be.false;
                });

                it("removes the view", function() {
                    expect(env.panel.$(".simple-view")).to.not.exist;
                });

                it("removes the reference", function() {
                    expect(env.panel.views.main).to.be.undefined;
                });

                it("returns true", function() {
                    expect(env.method_resp).to.be.true;
                });
            });

            describe(".removeAll", function() {
                beforeEach(function() {
                    env.panel.add({
                        "one": env.fixture_simple_view,
                        "two": env.fixture_simple_view_two,
                        "three": env.fixture_simple_view_three
                    });

                    env.method_resp = env.panel.removeAll();
                });

                it("exists", function() {
                    expect(env.panel).to.respondTo("removeAll");
                });

                it("removes the views", function() {
                    expect(env.panel.$(".simple-view")).to.not.exist;
                    expect(env.panel.$(".simple-view-two")).to.not.exist;
                    expect(env.panel.$(".simple-view-three")).to.not.exist;
                });

                it("removes the references", function() {
                    expect(env.panel.views.one).to.be.undefined;
                    expect(env.panel.views.two).to.be.undefined;
                    expect(env.panel.views.three).to.be.undefined;
                });

                it("returns true", function() {
                    expect(env.method_resp).to.be.true;
                });
            });
        });
    });

});
