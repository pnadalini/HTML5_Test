function switchTheme() {
 document.getElementById('webPageTheme').href = document.getElementById('webPageTheme').href.includes("css/bootstrap.min.css") ?
  document.getElementById('webPageTheme').href = "./css/dark.bootstrap.min.css" : document.getElementById('webPageTheme').href = "./css/bootstrap.min.css";
}

function changeFont() {
 if (document.getElementsByTagName("main")[0].classList.contains('arial-black'))
  document.getElementsByTagName("main")[0].classList.remove("arial-black");
 else
  document.getElementsByTagName("main")[0].classList.add("arial-black");
}
