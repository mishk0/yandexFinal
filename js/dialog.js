/*
function dialogShow(callback, data) {
    var elem;
    return new Dialog(callback, data)
}

*/

function Dialog(callback, data){
   this.callback = callback;
   this.data = data || {};
}

Dialog.prototype = {

    init : function() {
        var that = this;
        debugger;
        if (!$(".b-dialog").length) {
            that.el = $("<div class='b-dialog' />")
            var tmpl = _.template($('#dialog').html(), that.data);

          $("body").append(that.el.append(tmpl));
          that.el.on("click", ".close", function(){
              that.hide();
          });
          that.el.on("submit", "form", function(){
              that.submit();
          });
        }
        this.show();
    },
    show : function() {
       $("body").addClass("showingDialog");
       this.el.fadeIn();
    },
    hide : function() {
       $("body").removeClass("showingDialog");
       this.el.fadeOut();
    },
    submit : function() {
        debugger;
       this.callback();
       this.hide();

    }

}

