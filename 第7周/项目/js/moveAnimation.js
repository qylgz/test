// 头部图片动画
var moveAnimation = document.getElementById("moveAnimation");
var centerX = moveAnimation.offsetWidth / 2;  //中心点坐标
var centerY = moveAnimation.offsetHeight / 2;
var mouseX = 0; //鼠标坐标
var mouseY = 0;
var imgX = 0;  //正常图片移动坐标
var imgY = 0;
var imgHighX = 0;  //移动距离远的图片坐标
var imgHighY = 0;
var imgLowX = 0;  //移动距离近的图片坐标
var imgLowY = 0;
var imgTranslate = "";
var randomHigh = 2;
var randomLow = 0.5;
moveAnimation.onmousemove = function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  //获取图片需要移动的距离
  imgX = mouseX - centerX;
  imgY = mouseY - centerY;
  imgX = prescription(imgX) / 2;
  imgY = prescription(imgY) / 2;
  imgHighX = prescription(imgHighX);
  imgHighY = prescription(imgHighY);
  imgLowX = prescription(imgLowX);
  imgLowY = prescription(imgLowY);
  // 增大、减小图片位移距离
  imgHighX = imgChangeBig(imgX);
  imgHighY = imgChangeBig(imgY);
  imgLowX = imgChangeSmall(imgX);
  imgLowY = imgChangeSmall(imgY);

  translateAnimation(".imgAnimationMiddle", imgX, imgY);
  translateAnimation(".imgAnimationHigh", imgHighX, imgHighY);
  translateAnimation(".imgAnimationLow", imgLowX, imgLowY);

}
// 对图片设置动画效果
function translateAnimation(obj, imgTranslateX, imgTranslateY) {
  var imgObj = document.querySelectorAll(obj);
  imgTranslate = "translate(" + imgTranslateX + "px," + imgTranslateY + "px)";
  for (var i = 0; i < imgObj.length; i++) {
    imgObj[i].style.transform = imgTranslate;
  }
}

// 对计算结果进行开方，取小数点后两位
function prescription(num) {
  if (num > 0) {
    return Math.sqrt(num).toFixed(2);
  } else if (num == 0) {
    return 0;
  } else {
    return "-" + Math.sqrt(Math.abs(num)).toFixed(2);
  }
}
//将图片距离放大
function imgChangeBig(num) {
  return num * randomHigh;
}
//将图片距离缩小
function imgChangeSmall(num) {
  return num * randomLow;
}

// 视频剪辑及批量处理人物动画
var n = 0;
var windowsHeight = "";
var clipPerson = "";
var clipPersonPosition = "";
var clipDecision = "";
var toolAnimation = "";
var toolAnimationPosition = "";
var toolDecision = "";
document.body.onscroll = function () {
  windowsHeight = window.innerHeight; //获取窗口的的高度
  clipPerson = document.getElementById("clip_person"); //获取视频剪辑人物对象
  clipPersonPosition = clipPerson.getBoundingClientRect(); //获取其到顶部的距离
  clipDecision = clipPersonPosition.top - windowsHeight + 145;
  if (clipDecision < 0) {
    personMoveAnimation("clip_person_left", 105, -112);
    personMoveAnimation("clip_person_right", -152, -88)
  } else {
    n++;
    personMoveAnimationNo("clip_person_left", 0, 0);
    personMoveAnimationNo("clip_person_right", 0, 0);
  }

  toolAnimation = document.getElementById("toolAnimation");
  toolAnimationPosition = toolAnimation.getBoundingClientRect();
  toolDecision = toolAnimationPosition.top - windowsHeight + 300;
  console.log(toolDecision);
  if (toolDecision < 0) {
    personMoveAnimation("tooltoolAnimationLeft", 80, -52);
    personMoveAnimation("tooltoolAnimationRight", -168, -72)
  } else {
    personMoveAnimationNo("tooltoolAnimationLeft", 0, 0);
    personMoveAnimationNo("tooltoolAnimationRight", 0, 0);
  }
}
function personMoveAnimation(obj, personsX, personsY) {
  var persons = document.getElementById(obj);
  // 这里就是处理的事件
  persons.style.transform = "translate(" + personsX + "px," + personsY + "px)";
}
function personMoveAnimationNo(obj, personsX, personsY) {
  var persons = document.getElementById(obj);
  persons.style.transform = "translate(" + personsX + "px," + personsY + "px)";
}
