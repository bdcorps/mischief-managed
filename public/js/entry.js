$(document).ready(function() {
  $("#entry-phrase .hidden-text").html(entryPhrase);
});

var entryPhrase = "I solemnly swear that I am up to no good.";
var entryProgress = 0;
$(window).on("keydown touchstart mousedown touchmove", function(e) {
  checkEntry();
});

document.addEventListener(
  "",
  function(e) {
     var touch = e.touches[0];
     checkEntry();
  },
  false
);

function checkEntry() {
  entryProgress++;
  redrawEntryPhrase();
  if (entryProgress > entryPhrase.length) {
    console.log("Access Granted.");
    window.location.href = "/app";
  }
}

function redrawEntryPhrase() {
  var visiblePhrase = entryPhrase.substring(0, entryProgress);
  var hiddenPhrase = entryPhrase.substring(entryProgress, entryPhrase.length);
  $("#entry-phrase .visible-text").html(visiblePhrase);
  $("#entry-phrase .hidden-text").html(hiddenPhrase);
}
