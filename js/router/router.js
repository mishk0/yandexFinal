define("Controller", ["backbone", "jquery", "sc", "lc", "LecturesPage", "StudentsPage", "LectureBigPage", "StudentsBigPage", "templates"],
    function (Backbone, $, sc, lc, LecturesPage, StudentsPage, LectureBigPage, StudentsBigPage, templates) {
        "use strict";
        /**
         * Создает экземпляр роутера
         * @constructor
         */
        return Backbone.Router.extend({

            routes: {
                "": "index",
                "!/:type(/)": "handler",
                "!/:type/:id": "handler",
                "*undefined": "show404error"
            },
            handler: function (type, id) {
                if (type === "students") {
                    if (!this.sp) {
                        this.sp = new StudentsPage;
                    }
                    if (id !== undefined) {
                        var model = sc.filterId(id);
                        if (model === undefined) {
                            this.show404error();
                            return;
                        }
                        if (!this.sbp) {
                            this.sbp = new StudentsBigPage({model: model});
                        } else {
                            this.sbp.model = model;
                            this.sbp.initialize();
                        }

                    } else {
                        this.sp.render();
                    }
                    this.toggleNavStatus("students");
                } else if (type === "lectures") {
                    if (!this.lp) {
                        this.lp = new LecturesPage;
                    }
                    if (id !== undefined) {
                        var model = lc.filterId(id);
                        if (model === undefined) {
                            this.show404error();
                            return;
                        }
                        if (!this.lbp) {
                            this.lbp = new LectureBigPage({model: model});
                        } else {
                            this.lbp.model = model;
                            this.lbp.initialize();
                        }


                    } else {
                        this.lp.render();
                    }
                    this.toggleNavStatus("lectures");
                } else {
                    this.show404error();
                }

            },
            index: function () {

                $(".b-wrapper__content").html(templates["index"]());
                this.toggleNavStatus("index");
            },
            toggleNavStatus: function (state) {
                $(".b-nav li").removeClass("b-nav__link-active");
                $("[data-linkType=" + state + "]").addClass("b-nav__link-active");
            },
            show404error: function () {
                $(".b-wrapper__content").html(templates["error404"]);
                $(".b-nav li").removeClass("b-nav__link-active");
            }
        });
    });