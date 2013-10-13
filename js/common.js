define("common", ["underscore"],
    function (_) {
        "use strict";
        return {
            /**
             * Общие методы коллекций
             */
            collectionsMetods: {
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
            /**
             * Поиск максимального id
             * @return {id} id+1
             */
            setStudentsIds: function () {
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