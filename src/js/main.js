$(function () {

    scrollTo();

});

/* =========================================
 *  scrollTo
 *  =======================================*/

function scrollTo() {

    $().ready(function() {
        $(".scrollTo").click(function(t) {
            t.preventDefault();
            var o = $(this).attr("href");
            $("body").animate({
                scrollTop: $(o).offset().top - 50
            }, 600)
        })
    });
}