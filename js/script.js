$(function () {
    var sp, lp;
    var collectionsMetods = {
        filterId: function (id) {
            var arrElem = this.filter(function (item) {
                return item.get('id') == id;
            })
            if (arrElem.length === 1) {
                return arrElem[0]
            } else {
                return;
                throw new Error("ids Error");

            }
        }
    };

    var Controller = Backbone.Router.extend({

        routes: {
            "": "index",
            "!/:type": "handler",
            "!/:type/": "handler",
            "!/:type/:id": "handler",
            "*undefined": "show404error"
        },
        handler: function (type, id) {
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
                    new StudentsBigPage({model: model});
                } else {
                    sp.render();
                }
                this.toggleNavStatus("students");
            } else if (type === "lectures") {
                if (!lp) {
                    lp = new LecturesPage;
                }
                if (id !== undefined) {
                   var model = lc.filterId(id);
                    if (model === undefined) {
                        this.show404error();
                        return;
                    }
                    new LectureBigPage({model: model});
                } else {
                    lp.render();
                }
                this.toggleNavStatus("lectures");
            } else {
                this.show404error();
            }

        },
        index: function () {
            $(".b-wrapper__content").html(_.template($('#index').html()));
            this.toggleNavStatus("index");
        },
        toggleNavStatus: function (state) {
            $(".b-nav li").removeClass("b-nav__link-active");
            $("[data-linkType=" + state + "]").addClass("b-nav__link-active");
        },
        show404error: function() {
            $(".b-wrapper__content").html(_.template($('#error404').html()));
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
            return this;
        },
        remove: function () {
            this.model.clear();
            this.$el.remove();
        }
    });

    var StudentsCollection = Backbone.Collection.extend({
        model: Student,

        localStorage: new Store("students-backbone")
    }).extend(collectionsMetods);

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
                sc.reset(modelJson.students);
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
            this.render();
        },
        render: function () {
            this.wrapper.html(this.templates(this.model.toJSON()));
        }
    });
    var LecturesPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: _.template($('#all-lectures').html()),
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content");
            lc.fetch();
            if (!lc.models.length) {
                lc.reset(modelJson.lectures);
            }
        },
        render: function () {
            this.wrapper.html(this.templates({"lectures":modelJson.lectures}));
        }
    });
    var Lecture = Backbone.Model.extend({
        defaults: function () {
            return {
                comments: {}
            }
        }
    });
    var LecturesCollection = Backbone.Collection.extend({
        model : Lecture,
        localStorage: new Store("lectures-backbone")
    }).extend(collectionsMetods);

    var lc = new LecturesCollection;

    var LectureBigPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: _.template($('#lecturebig').html()),
        events: {
          "submit .b-page-lecture__commentsForm" : "submit"
        },
        initialize: function() {
           this.form = this.$(".b-page-lecture__commentsForm");
           this.wrapper = this.$(".b-wrapper__content");
           this.model.on("change", this.render, this);
           this.render();

        },
        render: function () {
            this.wrapper.html(this.templates(this.model.toJSON()));
        },
        submit: function () {
           var comments = this.model.get("comments");
            debugger;
        }
    })

    var controller = new Controller();
    Backbone.history.start();

})