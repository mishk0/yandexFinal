define("Lecture",["backbone"],
    function(Backbone) {
        "use strict";
        /**
         * Создает экземпляр модели лекции
         * @constructor
         */
        return Backbone.Model.extend({
        defaults: function () {
            return {
                comments: ''
            }
        }
    });
    });