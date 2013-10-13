define("StudentsPage",["backbone", "sc", "templates", "StudentView", "modelJson", "dialog", "common", "Student"],
    function(Backbone, sc, templates, StudentView, modelJson, dialog, common, Student) {
        "use strict";
        return Backbone.View.extend({
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
                    common.setStudentsIds = common.setStudentsIds();
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
});