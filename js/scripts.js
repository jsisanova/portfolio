
// twitter button on footer
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// facebook button on footer
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/sk_SK/sdk.js#xfbml=1&version=v2.10&appId=56296426311';
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// google map
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 48.199, lng: 11.587}
  });

  var image = 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png';

  marker = new google.maps.Marker({
    map: map,
    icon: image,
    title: 'You can find me here',
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 48.199, lng: 11.587}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


// DOCUMENT READY!!!
$(document).ready(function(){

  $('.message-box').css('background-color', 'rgb(207, 224, 228)');

  // alert("Document is ready!");

  // smooth scrolling - nav
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // tolltip on a link
  $(function () {
    $('#tooltip-item1').tooltip();
    $('#tooltip-item2').tooltip();
  });

  // tooltip on a button
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


  // running character count - event listener
  $('.message-box').on('keyup', function(){
    var charCount = $('.message-box').val().length;
    console.log(charCount);
    $('#char-count').html(charCount);

    if(charCount > 50) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', 'black');
    };
  });


  // clicked button - event listener
  $('#button-submit').on('click', function() {
  // now we're going to work in here
    var comment = $('.message-box').val();
    console.log(comment);
    console.log('clicked');

    if(comment === '') {
      $('.message-box').css('border', '1px solid red');
    } else {
      $('#visible-comment').html(comment);
      $('.message-box').hide();
    };

    var $email = $('#Email');
    if($email.val() === '') {
      $email.css('border', '1px solid red');
    } else {
      $email.css('border', '1px solid #ccc');
    }

    return false;
  });

  // stellar
  $('#faq').stellar({
    horizontalScrolling: false,
    responsive: true
  });


  // // work section - dynamically displayed work samples
  // console.log(works);
  for(var i = 0; i < works.length; ++i ) {
    $('#row-work').append('\
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 projects">\
        <a class="work-img" href="' + works[i].url + '" title="Click here">\
          <img class="img-responsive" src="' + works[i].pic + '">\
          <span class="info"><p class="proj-title">Title:</p> ' + works[i].title + ' </span>\
        <a/>\
      </div>\
    '); /*end append*/


    var images = $('#row-work img');
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };

    $('.work-img').mouseenter( function() {
      $('.info', this).show();
    }) .mouseleave(function(){
      $('.info', this).hide();
    });     // to show and hide text

  };


});
