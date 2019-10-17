// $(document).ready(function() {
//   console.log("ismo", isMobile);
//   const sources = {
//     saab: ["/images/4.gif", "https://loremflickr.com/320/240/dog"],
//     volvo: ["https://loremflickr.com/g/320/240/paris"]
//   };

//   loadResults("volvo");

//   $("#car").on("change", function() {
//     $("#results").empty();

//     var val = $("#car").val();
//     loadResults(val);
//   });

//   // $("img").on("click", function(e) {
//   //   e.preventDefault();
//   //   console.log(this.id);
//   //   elem = document.getElementById(this.id);
//   // });

//   function loadResults(val) {
//     var a = sources[val];
//     var i = 0;
//     a.forEach(function(e) {
//       i++;
//       var t = $(
//         '<div class="col"><img onclick="handleClick(this);" id="' +
//           i +
//           '" src="' +
//           e +
//           '"></div>'
//       );
//       $("#results").append(t);
//     });
//   }
// });

// var elem = document.getElementById("demo");

// var isFullScreen = false;

// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.mozRequestFullScreen) {
//     /* Firefox */
//     elem.mozRequestFullScreen();
//   } else if (elem.webkitRequestFullscreen) {
//     /* Chrome, Safari & Opera */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) {
//     /* IE/Edge */
//     elem.msRequestFullscreen();
//   }
// }

// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.mozCancelFullScreen) {
//     document.mozCancelFullScreen();
//   } else if (document.webkitExitFullscreen) {
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) {
//     document.msExitFullscreen();
//   }
// }

// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 192:
//       isFullScreen = !isFullScreen;
//       if (isFullScreen) {
//         openFullscreen();
//       } else {
//         closeFullscreen();
//       }
//       break;
//   }
// };

// function handleClick(e) {
//   var a = "#" + e.id;
//   $(a).toggleClass("selected");
//   console.log(e.id);
//   elem = document.getElementById(e.id);
// }
