function scrollBanner() {
    scrollPos = window.scrollY;
    var headerText = document.querySelector('.header-post h1')
    var headerText2 = document.querySelector('.header-post p')

    headerText.style.marginTop = -(scrollPos/3)+"px";
    headerText.style.opacity = 1-(scrollPos/480);

    headerText2.style.opacity = 1-(scrollPos/480);
  }
  
  window.addEventListener('scroll', scrollBanner);