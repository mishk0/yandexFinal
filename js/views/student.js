define("StudentView",["backbone","jquery", "templates"],
    function(Backbone,$,templates) {
        "use strict";
        return Backbone.View.extend({
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
    });