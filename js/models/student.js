define("Student",["backbone"],
    function(Backbone) {
        "use strict";
        /**
         * Создает экземпляр модели студента
         * @constructor
         */
        return Backbone.Model.extend({
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

    });