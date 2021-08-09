document.getElementById("responsivesearchbutton").addEventListener("click",opensearchbar);

function opensearchbar(){
    document.getElementById("responsivesearchinput").classList.toggle("d-block")
}

// document.getElementById("hamburger").addEventListener("click", openmenu)

// function openmenu(){
//     window.setTimeout(()=>{document.getElementById("mobilecurtainmenu").classList.toggle("toggle")},100) 
//     // document.getElementById("darkmode").classList.toggle("d-none")
//     // document.getElementById("fontsize").classList.toggle("d-none")
//     document.getElementById("backtotop").classList.toggle("d-none")
//     window.setTimeout(()=>{document.getElementById("hamburgericon").classList.toggle("d-none")},100) 
//     window.setTimeout(()=>{document.getElementById("cancelicon").classList.toggle("d-block")},100) 
//     document.getElementsByTagName('section').classList.toggle("d-none")
// }


document.getElementById("labelformenuicon").addEventListener("click", openmenu)

function openmenu(){
  document.getElementById("mobilecurtainmenu").classList.toggle("toggle")
  document.getElementById("backtotop").classList.toggle("d-none")
  // document.getElementById("hamburger").classList.toggle("d-none")
  document.getElementsByTagName('section').classList.toggle("d-none")
}



// Back to Top
const backtotop = document.getElementById('backtotop').addEventListener("click",scrollToTop)

function scrollToTop() {
  var position =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 5);
  } else clearTimeout(scrollAnimation);
}



/// MAP

function initMap() {
  var uluru = { lat: 40.379560, lng: 49.843996 };
  var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 16, center: uluru });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

/// Accordion

var acc = document.getElementsByClassName("accordionbutton");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    window.setTimeout(()=>{this.classList.toggle("accordionbuttonactive")},50) 
    window.setTimeout(()=>{ this.classList.toggle("activebutton")},50) 
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.classList.toggle("d-none");
    } else {
      panel.classList.toggle("d-block");
    }
  });
}



