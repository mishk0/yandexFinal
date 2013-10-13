define("LectureBigPage",["backbone","jquery", "templates"],
    function(Backbone,$, templates) {
        "use strict";
        return Backbone.View.extend({
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
});