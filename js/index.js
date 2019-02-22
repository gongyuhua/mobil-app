$(function() {
  //ad
  var num = $(".count-down span b").text();
  // countDown(num);
  //timer
  var timer = setInterval(() => {
    if (num > 1) {
      num--;
      $(".count-down span b").text(num);
    } else {
      clearInterval(timer);
      $(".count-down").fadeOut(800);
    }
  }, 1000);
  //skip
  $(".count-down .jump").click(function() {
    jump();
  });
  //login
  $(".panel input").on("focus", function() {
    $(this)
      .next()
      .hide();
    $(".msg-tip").animate({ right: "-50%" }, 100);
  });

  $(".panel .mobile").on("blur", function() {
    var cur = $(this);
    var value = $(this).val();
    var filter = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    fromEvent(
      cur,
      value,
      filter,
      "your enter should not be empty",
      "your phone number format is wrong"
    ); //verify mobile
  });
  $(".panel .password").on("blur", function() {
    var cur = $(this);
    var value = $(this).val();
    var filter = /^[a-zA-Z0-9]\w{5,17}$/;
    fromEvent(
      cur,
      value,
      filter,
      "your password should not be empty",
      "your password format is wrong"
    ); //verify password
  });
  $(".panel .login").click(function() {
    var _mobile = $(".mobile").val();
    var _psd = $(".password").val();
    var data = {
      mobile: _mobile,
      password: _psd
    };
    if (!_mobile || !_psd || $(".error-tip").is(":visible")) {
      $(".msg-tip").animate({ right: 0 }, 300);
    } else {
      window.location.href = "index.html";
      // $.ajax({
      //   type: "post",
      //   url: "http://localhost:3333/getList",
      //   async: true,
      //   data: data,
      //   dataType: "json",
      //   success: function() {
      //     window.location.href = "index.html";
      //   },
      //   error: function(error) {
      //     console.log(error);
      //   }
      // });
    }
  });
  //img carousel
  var index = 0,
    length = $(".banner img").length;
  $(".banner img")
    .eq(0)
    .show()
    .siblings("img")
    .hide();
  //circle
  for (var i = 0; i < length; i++) {
    var select = i == 0 ? "selected" : "";
    $(".banner-circle ul").append('<li class="' + select + '"></li>');
  }
  setInterval(banner, 3000);
  function banner() {
    index++;
    if (index == length) {
      index = 0;
    }
    $(".banner img")
      .eq(index)
      .show()
      .siblings("img")
      .hide();
    $(".banner-circle ul li")
      .removeClass()
      .eq(index)
      .addClass("selected");
  }
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

function fromEvent(cur, value, filter, text1, text2) {
  if (value == "") {
    cur
      .next()
      .show()
      .text(text1);
  } else if (!filter.test(value)) {
    cur
      .next()
      .show()
      .text(text2);
  } else {
    cur.next().hide();
  }
}
