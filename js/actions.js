function switchTheme (){
  document.getElementById('webPageTheme').href = document.getElementById('webPageTheme').href.includes("css/bootstrap.min.css") ?
    document.getElementById('webPageTheme').href = "./css/dark.bootstrap.min.css" : document.getElementById('webPageTheme').href = "./css/bootstrap.min.css";
}
