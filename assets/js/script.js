
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

function redirecionar() {
    $("li a").on('click', function() {
        $("body").animate({
            scrollTop: $($(this).attr('href')).offset().top - 30
		}, 400);
        abrirFecharMenu();
        return false;
    });
}
