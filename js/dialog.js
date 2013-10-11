$(function () {
    function Dialog() {
        this.init();
    }

    Dialog.prototype = {

        init: function () {
            var that = this;
            that.el = $("<div class='b-dialog' />")
            this.tmpl = _.template($('#dialog').html());

            $("body").append(that.el);
            that.el.on("click", ".close", function () {
                that.hide();
            });
            that.el.on("submit", "form", function () {
                that.submit();
            });
            $(document).on("click", ".b-dialog", function (e) {
                if ($(e.target).closest(".b-dialog-wrapper").length == 0) {
                    that.hide();
                }
            })
        },
        show: function (callback, data) {
            var that = this;
            this.callback = callback;
            this.el.html(that.tmpl(data));
            this.el.fadeIn();
        },
        hide: function () {
            this.el.fadeOut();
        },
        submit: function () {
            var dataForm = this.el.find("form").serializeArray();
            var dataJSON = {};
            _.each(dataForm, function(i){
                if (i["value"]) {
                dataJSON[i["name"]] = _.escape(i["value"]);
                }
            });
            debugger;
               dataJSON["id"] = setStId();
            if (this.callback) {
                this.callback(dataJSON);
            }
            this.hide();
            return false;
        }

    }
    window.dialog = new Dialog();
})


