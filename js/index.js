$(function() {
  var num = $(".count-down span b").text();
  countDown(num);
  $(".count-down .jump").click(function() {
    jump();
  });
});

function countDown(n) {
  if (n > 0) {
    setTimeout(function() {
      n--;
      $(".count-down span b").text(n);
      countDown(n);
    }, 1000);
  } else {
    jump();
  }
}
function jump() {
  $(".count-down").fadeOut(800);
}
