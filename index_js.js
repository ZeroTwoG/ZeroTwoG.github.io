//下拉菜单动画引用

function two_down(a) {
  var two_down = document.getElementsByClassName("two_drop_down")[0]
  two_down.style.display = "block"
  switch (a) {
    case 0:
      two_down_zero();
      break;
    case 1:
      two_down_one();
      break;
    case 2:
      two_down_two();
      break;

  }
}
function two_down_over() {
  var two_down = document.getElementsByClassName("two_drop_down")[0]
  two_down.style.display = "none"
}
function two_down_zero() {
  two_down_button.innerHTML = `<iframe src="src/jiaoliuqu.html" name="open_new" frameborder="0" class="two_down_iframe"></iframe>`

}
function two_down_one() {
  two_down_button.innerHTML = `<iframe src="src/mozuqu.html" name="open_new" frameborder="0" class="two_down_iframe"></iframe>`
}
function two_down_two() {
  two_down_button.innerHTML = `<iframe src="src/zhenghebao.html" name="open_new" frameborder="0" class="two_down_iframe"></iframe>`
}
//循环播放图片
var ones = document.getElementsByClassName("one_oneso")
function clear() {
  for (var i = 0; i < 3; i++) {
    ones[i].style.backgroundColor = "white"
  }
}
function lbt(a) {
  // ones.backbround.color = "red"
  switch (a) {
    case 0:
      document.querySelectorAll('.one_img')[0].scrollLeft = 0
      clear();
      ones[0].style.backgroundColor = "red"
      break;
    case 1:
      document.querySelectorAll('.one_img')[0].scrollLeft = 800
      clear();
      ones[1].style.backgroundColor = "red"
      break;
    case 2:
      document.querySelectorAll('.one_img')[0].scrollLeft = 1600
      clear();
      ones[2].style.backgroundColor = "red"
      break;
  }
}
myFunction();
var a = 0
function myFunction() {
  var div_ = document.querySelectorAll('.one_img')[0].scrollLeft;
  // console.log(div_);
  switch (div_) {
    case 0:
      clear();
      ones[0].style.backgroundColor = "red"
      break;
    case 800:
      clear();
      ones[1].style.backgroundColor = "red"
      break;
    case 1600:
      clear();
      ones[2].style.backgroundColor = "red"
      break;
  }
  if (div_ == 800 || div_ == 1600 || div_ == 0) {
    a++;
    if (a > 500) {
      document.querySelectorAll('.one_img')[0].scrollLeft += 5
    }
  } else {
    a = 0;
    document.querySelectorAll('.one_img')[0].scrollLeft += 5
  }
  if (div_ == 2400) {
    document.querySelectorAll('.one_img')[0].scrollLeft = 0
  }
  setTimeout('myFunction()', 10)
}
