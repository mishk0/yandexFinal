define("LecturesPage",["backbone", "lc", "templates", "modelJson"],
    function(Backbone, lc,templates, modelJson) {
        "use strict";
        /**
         * Создает экземпляр представления списка лекций
         * @constructor.
         */
        return Backbone.View.extend({
        el: $(".b-wrapper"),
        templates: templates["all-lectures"],
        initialize: function () {
            this.wrapper = this.$(".b-wrapper__content");
            lc.fetch({
                success: function () {
                    if (!lc.models.length) {
                        lc.reset(modelJson.lectures);
                        _.each(lc.models, function (i) {
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