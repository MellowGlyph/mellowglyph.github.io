$(document).ready(function() {
  console.log("zero");
  var btn = $('.zc');
  try {
    console.log("zero try");
    if(!new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
      console.log("zero try -> display:none");
      btn.style.display = "none";
    }
  }
  catch(e) {
    console.log("zero catch");
    if(navigator.mimeTypes ["application/x-shockwave-flash"] === undefined) {
      console.log("zero catch -> display:none");
      btn.style.display = "none";
    }
  }
	var clip = new ZeroClipboard($(".zc"));
  clip.on("ready", function() {

  });
});
