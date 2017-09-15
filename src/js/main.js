$(function () {

    scrollTo();
    scrollBanner();

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

/* =========================================
 *  scrollBanner
 *  =======================================*/

function scrollBanner() {

    scrollPos = window.scrollY;
    var headerText = document.querySelector('header h1')
    var headerText2 = document.querySelector('header p')

    headerText.style.marginTop = -(scrollPos/3)+"px";
    headerText.style.opacity = 1-(scrollPos/480);

    headerText2.style.opacity = 1-(scrollPos/480);
}
window.addEventListener('scroll', scrollBanner);