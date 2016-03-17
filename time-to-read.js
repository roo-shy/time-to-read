var timeToRead = function (wpm) {
  wpm = isNaN(wpm) ? 230 : wpm;
  var bodyContent = document.getElementsByTagName("body");
  var bodyStr = "";

  var wordsArr = bodyStr.split((/[\s\n]+/));
  console.log(wordsArr.length + " words");
  var minutes = wordsArr.length / 230;
  // console.log(minutes + " minutes");
  return minutes;
}

var readTimer = document.getElementsByClassName("time-to-read-view")[0];
var node = document.createTextNode("Read time: " + timeToRead() + " minutes");
readTimer.appendChild(node);
