$(document).ready(function() {
  elem = document.getElementById("excel_1");
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.setProperty("--main-bg-color", "#2d07e5");
});
// const colors = ["2d07e5", "8d0247", "8d4102"];
const colors = [
  "#2d07e5",
  "#900C3F",
  "#750D12",
  "#760A3A",
  "#4F2096",
  "#003D73",
  "#004447",
  "#054719",
  "#BA4A00"
];

$(document).keydown(function(e) {
  switch (e.keyCode) {
    case 192:
      isFullScreen = !isFullScreen;
      if (isFullScreen) {
        openFullscreen();
      } else {
        closeFullscreen();
      }
      break;
  }
});

var elem = null;

var isFullScreen = false;

function openFullscreen() {
  removeAllSelected();
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  elem.className += " selected";
}

function handleClick(e) {
  var a = "#" + e.id;
  elem = document.getElementById(e.id);
  if (!isFullScreen) {
    removeAllSelected();
    $(a).addClass("selected");
  }
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  ul = document.getElementById("mischiefs");
  li = ul.getElementsByTagName("li");
  console.log(li);
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function removeAllSelected() {
  $(".mischief-card .image").removeClass("selected");
}
