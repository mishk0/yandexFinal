$(function () {
    var sp, lp, lbp, sbp;   // studentsPage, lecturesPage, lecturesBigPage, studentsBigPage

    // общие методы для коллекций
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
            "!/:type(/)": "handler",
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
                    if (!sbp) {
                        sbp = new StudentsBigPage({model: model});
                    } else {
                        sbp.model = model;
                        sbp.initialize();
                    }

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
                    if (!lbp) {
                        lbp = new LectureBigPage({model: model});
                    } else {
                        lbp.model = model;
                        lbp.initialize();
                    }


                } else {
                    lp.render();
                }
                this.toggleNavStatus("lectures");
            } else {
                this.show404error();
            }

        },
        index: function () {
            $(".b-wrapper__content").html(templates["index"]);
            this.toggleNavStatus("index");
        },
        toggleNavStatus: function (state) {
            $(".b-nav li").removeClass("b-nav__link-active");
            $("[data-linkType=" + state + "]").addClass("b-nav__link-active");
        },
        show404error: function () {
            $(".b-wrapper__content").html(templates["error404"]);
        }
    });

    /*Student model*/
    var Student = Backbone.Model.extend({
        defaults: {
            first_name: "noname",
            city: "Москва",
            link_photo: "i/blank-user.gif"
        },
        initialize: function () {
            if (!this.get("first_name")) {
                this.set({"first_name": this.defaults.first_name});
            }
            if (!this.get("link_photo")) {
                this.set({"link_photo": this.defaults.link_photo});
            }
        },
        validate: function (attrs) {
            if (!attrs.first_name) {
                this.set({"first_name": this.defaults.first_name});
            }
            if (!attrs.link_photo) {
                this.set({"link_photo": this.defaults.link_photo});
            }
        },
        clear: function () {
            this.destroy();
        }
    });
    var Lecture = Backbone.Model.extend({
        defaults: function () {
            return {
                comments: ''
            }
        }
    });
    /*Student view*/
    var StudentView = Backbone.View.extend({
        tagName: "div",
        className: "b-student",
        events: {
            "click .close": "remove"
        },
        template: templates["student"],
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

    var LecturesCollection = Backbone.Collection.extend({
        model: Lecture,
        localStorage: new Store("lectures-backbone")
    }).extend(collectionsMetods);

    var sc = new StudentsCollection;
    var lc = new LecturesCollection;


    var StudentsPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: templates["all-students"],
        events: {
            "click .addStudent": "addStudent"
        },
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content")
            _.bindAll(this, 'addOne');
            sc.on('add', this.addOne, this);
            sc.on('reset', this.addAll, this);
            sc.fetch({
                success: function () {
                    if (!sc.models.length) {
                        sc.reset(modelJson.students);
                        _.each(sc.models, function (i) {         // todo optimize
                            i.save();
                        })
                    }
                    window.setStId = setStudentsIds();
                }
            });


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
            var wrapper = document.createDocumentFragment();
            sc.each(function(student){
               var view = new StudentView({model: student});
               wrapper.appendChild(view.render().el);
            });
            this.$(".b-students__list").append(wrapper);
        },
        addStudent: function () {
            dialog.show(function (data) {
                var model = new Student(data);
                sc.add(model);
                model.save();
            });
        }
    });
    var StudentsBigPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: templates["studentbig"],
        events: {
            "click .editStudent": "editStudent"
        },
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content");
            this.model.on("change", this.render, this);
            this.render();
        },
        render: function () {
            this.wrapper.html(this.templates(this.model.toJSON()));
        },
        editStudent: function () {
            var that = this;
            dialog.show(function (data) {
                that.model.set(data)
                that.model.save();
            }, this.model.toJSON());
        }
    });


    var LecturesPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: templates["all-lectures"],
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content");
            lc.fetch({
                success: function () {
                    if (!lc.models.length) {
                        lc.reset(modelJson.lectures);
                        _.each(lc.models, function (i) {         // todo optimize
                            i.save();
                        })
                    }
                }
            });

        },
        render: function () {
            this.wrapper.html(this.templates({"lectures": lc.toJSON()}));
        }
    });
    var LectureBigPage = Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: {
            "lecturebig": templates["lecturebig"],
            "comments": templates["comments"]
        },
        events: {
            "submit .b-page-lecture-big__commentsForm": "submit"
        },
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content");
            this.model.on("change:comments", this.renderComments, this);
            this.render();

        },
        render: function () {
            this.wrapper.html(this.templates["lecturebig"](this.model.toJSON()));
            if (this.model.get("comments")) {
                this.renderComments();
            }
        },
        renderComments: function () {
            var commentObj = $.parseJSON(this.model.toJSON().comments);
            this.wrapper.find(".b-page-lecture-big__comments").html(this.templates["comments"]({"comments": commentObj}));
        },
        submit: function () {
            this.form = this.$(".b-page-lecture-big__commentsForm");
            var textarea = this.form.find("[name='text']");
            var inp = this.form.find("[name='name']");
            if (!textarea.val()) {
                textarea.addClass("error");
                return false;
            }
            var comment = {
                name: inp.val() || "без имени",
                message: textarea.val()
            }
            var comments = this.model.get("comments")
            if (comments) {
                comments = $.parseJSON(comments);
                comments.push(comment);
            } else {
                comments = [comment];
            }
            this.model.save({"comments": JSON.stringify(comments)});
            textarea.removeClass("error").val("");
            inp.val("");
            return false;
        }
    })

    function setStudentsIds() {
        if (localStorage["students-backbone"]) {
            var maxLocal = localStorage["students-backbone"].split(",");
        }
        var maxLocalInt = [];
        _.each(maxLocal, function (i, v) {
            maxLocalInt.push(+i)
        });
        var id = _.max(maxLocalInt);

        return function () {
            return id += 1;
        }
    };

    var controller = new Controller();
    Backbone.history.start();

})


