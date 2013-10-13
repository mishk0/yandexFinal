define("Lecture",["backbone"],
    function(Backbone) {
        "use strict";
        return Backbone.Model.extend({
        defaults: function () {
            return {
                comments: ''
            }
        }
    });
    });