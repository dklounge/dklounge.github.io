---
---
console.log('main.js successfully loaded! Now loading other js below.');
{% include twitter/bootstrap/js/bootstrap.min.js %}

function flip() {
  document.getElementById('profile').src = "{{BASE_PATH}}/assets/images/profile1.png";
  // console.log('now entering the neutral zone');
}
function flip_back() {
  document.getElementById('profile').src = "{{BASE_PATH}}/assets/images/profile2.png";
  // console.log('now leaving the neutral zone');
}

