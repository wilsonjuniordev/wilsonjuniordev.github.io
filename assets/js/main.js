$(function () {

    scrollTo();
    abrirFecharMenu();
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
                scrollTop: $(o).offset().top - 30
            }, 600)
        })
    });
}

/* =========================================
 *  abrirFecharMenu
 *  =======================================*/

function abrirFecharMenu() {

    var btnMenu = "confinado";
	var btn = document.getElementById("bs-example-navbar-collapse-1");

	if (btnMenu === "expandir") {
		btn.className = "navbar-collapse collapse in";
		btnMenu = "confinado";
	} else {
		btn.className = "navbar-collapse collapse";
		btnMenu = "expandir";
	}
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