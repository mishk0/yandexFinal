$(function () {
    var sp;
    var Controller = Backbone.Router.extend({

        routes: {
            "": "index",
            "!/:type": "students",
            "!/:type/": "students",
            "!/:type/:id": "students",
            "*undefined": "show404error"
        },
        students: function (type, id) {
            /*if (id !== undefined) {
             app.model.set({state : "students", studentId : id});
             } else {
             app.model.set({state : "students", studentId : false});
             }*/
            if (type === "students") {
                if (!sp) {
                    sp = new StudentsPage;
                }
                if (id !== undefined) {
                    var model = sc.filterId(id);
                    if (model === undefined) {
                        this.show404error();
                        return;
                    }
                    var sbp = new StudentsBigPage({model: model});
                    sbp.render();
                } else {
                    sp.render();
                }
                this.toggleNavStatus("students");
            } else {
                this.show404error();
            }
        },
        index: function () {
            $(".b-wrapper__content").html(_.template($('#index').html()));
            this.toggleNavStatus("index");
            //  app.model.set({state : "index", studentId : false});
        },
        toggleNavStatus: function (state) {
            $(".b-nav li").removeClass("b-nav__link-active");
            $("[data-linkType=" + state + "]").addClass("b-nav__link-active");
        },
        show404error: function() {
            $(".b-wrapper__content").html(_.template($('#error404').html()));
        }
    });

    /*App model*/
    var App = Backbone.Model.extend({
        defaults: function () {
            return {
                state: "index"
            }
        }
    });
    /*App view*/
    var AppView = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: { // Шаблоны на разное состояние
            "index": _.template($('#index').html()),
            "students": _.template($('#all-students').html()),
            "studentbig": _.template($('#studentbig').html())
        },
        initialize: function () {
            this.model.on("change", this.render, this);
        },
        render: function () {
            var newState = this.model.get("state");
            var id = this.model.get("studentId");
            var elem = this.$(".b-wrapper__content");

            if (id && newState == "students") {
                elem.html(this.templates["studentbig"](sc.filterId(id).toJSON()))
            } else {
                elem.html(this.templates[newState]);
            }

            this.toggleNavStatus(newState);
        },
        toggleNavStatus: function (newState) {
            this.$(".b-nav li").removeClass("b-nav__link-active");
            this.$("[data-linkType=" + newState + "]").addClass("b-nav__link-active");
        }
    });

    /*Student model*/
    var Student = Backbone.Model.extend({
        defaults: function () {
            return {
                first_name: "noname",
                link_photo: "i/blank-user.gif"
            }
        },
        clear: function () {
            this.destroy();
        }
    });
    /*Student view*/
    var StudentView = Backbone.View.extend({
        tagName: "div",
        className: "b-student",
        events: {
            "click .close": "remove"
        },
        template: _.template($("#student").html()),
        initialize: function () {
            this.model.on("change", this.render, this);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.model.save();
            return this;
        },
        remove: function () {
            this.model.clear();
            this.$el.remove();
        }
    });

    var StudentsCollection = Backbone.Collection.extend({
        model: Student,

        localStorage: new Store("students-backbone"),

        filterId: function (id) {
            var arrElem = this.filter(function (student) {
                return student.get('id') == id;
            })
            if (arrElem.length === 1) {
                return arrElem[0]
            } else {
                return;
                throw new Error("ids Error");

            }
        }
    })
    var sc = new StudentsCollection;

    var StudentsPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: _.template($('#all-students').html()),
        events: {

        },
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content")
            _.bindAll(this, 'addOne');
            sc.on('add', this.addOne, this);
            sc.on('reset', this.addAll, this);
            sc.fetch();
            if (!sc.models.length) {
                sc.reset(modelJson);
            }
        },
        render: function () {
            this.wrapper.html(this.templates);
            sc.trigger("reset");
        },
        addOne: function (student) {
            var view = new StudentView({model: student});
            this.$(".b-students__list").append(view.render().el);
        },
        addAll: function () {
            sc.each(this.addOne);
        }
    });
    var StudentsBigPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: _.template($('#studentbig').html()),
        events: {

        },
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content");
            this.model.on("change", this.render, this);
        },
        render: function () {
            this.wrapper.html(this.templates(this.model.toJSON()));
        }
    });


//new StudentsPage;
//var app = new AppView({model : new App()});

    var controller = new Controller();
    Backbone.history.start();

})