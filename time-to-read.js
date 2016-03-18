
function timeToRead() {
var bodyContent = document.querySelector("body").innerHTML.split(" ").length/230.0;
return bodyContent.toFixed(2);
}

var readTimeViewer = document.getElementsByClassName("time-to-read-view")[0];
var node = document.createTextNode("Read time: " + timeToRead() + " minutes");
readTimeViewer.appendChild(node);
