function mobilemenu() {
  var popup = document.getElementById("mobile");
  if (popup.style.left == "-80%") {
    popup.style.left = "0%";
  } else {
    popup.style.left = "-80%";
  }
}

window.onscroll = function() {
  if(window.scrolly > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('header').style.backgroundColor = 'rgba(184, 228, 218, 1)'
    document.getElementById('header').style.padding = '3px 0px'
    document.getElementById('scroll-icon').style.opacity = '1'
   
  } else {
    document.getElementById('header').style.backgroundColor = 'transparent'
    document.getElementById('header').style.padding = '6px 0px'
    document.getElementById('scroll-icon').style.opacity = '0'
  }
}
document.getElementById('scroll-icon').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




