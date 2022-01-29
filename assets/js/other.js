function Hide() {
    var x = document.getElementById("container");
    var xx = document.getElementById("myDiv");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
    if (xx.style.display === "block") {
      xx.style.display = "none";
    } else {
      xx.style.display = "block";
    }
  }