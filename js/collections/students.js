define("sc",["backbone", "Store", "common", "Student"],
    function(Backbone, Store, common, Student) {
        "use strict";
        var collection = Backbone.Collection.extend({
        model: Student,

        localStorage: new Store("students-backbone")
    }).extend(common.collectionsMetods);
        return new collection;
    });