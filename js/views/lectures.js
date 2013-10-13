define("LecturesPage",["backbone", "lc", "templates", "modelJson"],
    function(Backbone, lc,templates, modelJson) {
        "use strict";
        return Backbone.View.extend({
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
    });