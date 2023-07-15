function mobilemenu() {
    var popup = document.getElementById("mobile");
    if (popup.style.left == "-80%") {
      popup.style.left = "0%";
    } else {
      popup.style.left = "-80%";
    }
  }