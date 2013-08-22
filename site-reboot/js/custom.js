// detect a mobile device

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

  // open up video url
  if(isMobile.any()){
  
    //play video on mobile a device
    $( "#video-area" ).click(function() {
      //auto play video
      window.location = "http://vimeo.com/64117317";
    });
  
    //alert('test');
  }
  
  else {
  
    //Video player
    $( "#video-area" ).click(function() {
      $( "#marketing-video" ).fadeIn();
    });

    $( "#marketing-video" ).click(function() {
      $( "#marketing-video" ).fadeOut();
    });

    $( ".video-closebtn" ).click(function() {
      $( "#marketing-video" ).fadeOut();
    });
    
  }


// hover effect over video player  
  $('#main-image').on('mouseenter', function() {
          $(this).fadeOut('slow');
          $('#main-image-overlay').fadeIn('slow');
  });

  $('#main-image-overlay').css({left: $('#main-image').position().left, top: $('#main-image').position().top})
             .on('mouseleave', function() {
          $(this).fadeOut('slow');
          $('#main-image').fadeIn('slow');
  });


// press Escape to close the video player
// $(document).keyup(function(e) {
// 
//   if (e.keyCode == 27) {
//     $( "#marketing-video" ).fadeOut();
//   }   // esc
// 
// });
