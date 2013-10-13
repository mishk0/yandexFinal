define("lc",["backbone", "Store", "common", "Lecture"],
    function(Backbone, Store, common, Lecture) {
        "use strict";
        var collection = Backbone.Collection.extend({
        model: Lecture,
        localStorage: new Store("lectures-backbone")
    }).extend(common.collectionsMetods);
        return new collection;

    });