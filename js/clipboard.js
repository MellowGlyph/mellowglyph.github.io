$(document).ready(function() {
  //console.log("zero");
  var btn = $('.zc');
  if ( !isMobile() ){
    try {
      if(!new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
        console.log("zero try -> display:none");
        btn.css('display', 'none');
      }
    } catch(e) {
      if(navigator.mimeTypes ["application/x-shockwave-flash"] === undefined) {
        console.log("zero catch -> display:none");
        btn.css('display', 'none');
      }
    }
    var clip = new ZeroClipboard($(".zc"));
    clip.on("ready", function() {

    });
  } else {
    btn.css('display', 'none');
  }
});
