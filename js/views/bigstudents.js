define("StudentsBigPage",["backbone","jquery", "templates", "dialog"],
    function(Backbone,$,templates, dialog) {
        "use strict";
        return Backbone.View.extend({
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
    });