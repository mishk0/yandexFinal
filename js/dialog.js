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
            $("body").addClass("showingDialog");
            this.el.fadeIn();
        },
        hide: function () {
            $("body").removeClass("showingDialog");
            this.el.fadeOut();
        },
        submit: function () {
            if (this.callback) {
                this.callback();
            }
            this.hide();

        }

    }
    window.dialog = new Dialog();
})


