$(function () {
    function Dialog() {
        this.init();
    }

    Dialog.prototype = {

        init: function () {
            var that = this;
            that.el = $("<div class='b-dialog' />").append("<div class='b-dialog-wrapper'><form></form><span class='close'>×</span></div>");
            that.form = that.el.find("form");
            this.tmpl = templates["dialog"];

            $("body").append(that.el);
            that.el.on("click", ".close", function () {
                that.hide();
            });
            that.form.on("submit", function () {
                that.submit();
                return false;
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
            this.form.html(that.tmpl(data || {}));
            this.el.fadeIn();
        },
        hide: function () {
            this.el.fadeOut();
        },
        submit: function () {
            var dataForm = this.el.find("form").serializeArray();
            var dataJSON = {};
            _.each(dataForm, function (i) {
                dataJSON[i["name"]] = i["value"];
            });
            if (!dataJSON["id"]) {
                dataJSON["id"] = setStId();
            }
            if (this.callback) {
                this.callback(dataJSON);
            }
            this.hide();
        }

    }
    window.dialog = new Dialog();
})


