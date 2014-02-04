---
---
console.log('main.js successfully loaded! Now loading other js below.');

function flip() {
  document.getElementById('profile').src = "{{BASE_PATH}}/assets/images/profile1.png";
  // console.log('now entering the neutral zone');
}
function flip_back() {
  document.getElementById('profile').src = "{{BASE_PATH}}/assets/images/profile2.png";
  // console.log('now leaving the neutral zone');
}

$(document).ready(function () {
  $('#navbar li').mouseenter(function () {
    $('ul#sub-menu').css({"display":"block", "visibility": "visible", "float":"none"});
    console.log('entering');
  })

  $('ul#sub-menu').mouseleave(function () {
    $('ul#sub-menu').css({"display":"none", "visibility": "hidden"});
    console.log('exiting');
  })

  $('h3#how').mouseenter(function () {
    $('#how').closest("h3").remove();
  })
});
