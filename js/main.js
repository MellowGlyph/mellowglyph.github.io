var footerId = 'footer';
var contentMargin = 20;
var breakPoint = 700;
var resizeTimer;
var interval = Math.floor(1000 / 60 * 20);  //Math.floor(1000 / 60 * 10);

var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

$(document).ready(function(){
  carousel();
  smoothScroll();
  stickyFooter();
  $("#console-log").text(window.navigator.userAgent.toLowerCase());
});

function smoothScroll() {
  $(window).scroll(function(){
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    if( scrollt >200 ){
      $("#gotop").fadeIn(333);
    } else {
      $("#gotop").fadeOut(333);
    }
  });
  $("#gotop").click(function(){
    $("html,body").animate({scrollTop:"0px"},200);
    return false
  });
}

function carousel() {
  $(document).ready(function(){
    $('.carousel > div').css('visibility','visible');
    $('.carousel').slick({
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
}

// window resize Listner
window.addEventListener('resize', function (event) {
  //console.log('window resizing...');
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(function () {
    //console.log('window resized');
    stickyFooter();
  }, interval);
});

// sticky footer function
function stickyFooter() {
  //console.log("---> stickyFooter Start");

  // sticky footer detect
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var mainHeight = document.getElementById('main').offsetHeight;
  var footerHeight = document.getElementById(footerId).offsetHeight;

  if (winHeight > (mainHeight+footerHeight)) {
    if (winWidth > breakPoint) {
      document.getElementById(footerId).style.marginTop = (winHeight - mainHeight - footerHeight)+'px';
    } else {
      // document.getElementById(footerId).style.marginTop = 'auto';
      document.getElementById(footerId).style.marginTop = (winHeight - mainHeight - footerHeight)+'px';
    }
  } else {
    document.getElementById(footerId).style.marginTop = (contentMargin)+'px';
  }
  //console.log("footer margin-top: "+document.getElementById(footerId).style.marginTop);
  //console.log("---> stickyFooter End");
}

function isMobile(){
  if(_ua.Mobile || _ua.Tablet){ return true; }
  return false;
}

function hasFlash() {
  try {
    var obj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if(obj) return true;
  } catch(e) {
    if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) return true;
  }
  return false;
}

function loadFancybox() {
  (function($){
    $('.fancybox').fancybox();
  })(jQuery);
}

function copyright() {
  var d = new Date();
  document.write(d.getFullYear()+'&nbsp;');
}
