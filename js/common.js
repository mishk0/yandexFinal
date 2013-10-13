define("common",["backbone"],
    function(Backbone) {
        "use strict";
        return {
            collectionsMetods : {
            filterId: function (id) {
                        var arrElem = this.filter(function (item) {
                            return item.get('id') == id;
                        })
                        if (arrElem.length === 1) {
                            return arrElem[0]
                        } else {
                            return;
                            throw new Error("ids Error");

                        }
                    }
            },
        
        setStudentsIds: function() {
        if (localStorage["students-backbone"]) {
            var maxLocal = localStorage["students-backbone"].split(",");
        }
        var maxLocalInt = [];
        _.each(maxLocal, function (i, v) {
            maxLocalInt.push(+i)
        });
        var id = _.max(maxLocalInt);

        return function () {
            return id += 1;
        }
    }
    };
});