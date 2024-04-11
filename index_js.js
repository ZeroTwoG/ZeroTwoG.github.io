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

