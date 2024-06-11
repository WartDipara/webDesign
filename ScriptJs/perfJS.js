var alterLeft = document.querySelector('.alter-left');
var alterRight = document.querySelector('.alter-right');

var imgArr = [
    'res_img/text-contain/bard.jpg', 'res_img/text-contain/blackmage.jpg', 'res_img/text-contain/bluemage.jpg', 
    'res_img/text-contain/dance.jpg','res_img/text-contain/reaper.jpg','res_img/text-contain/sage.jpg',
    'res_img/text-contain/DK.jpg','res_img/text-contain/samura.jpg','res_img/text-contain/warrior.jpg',
    'res_img/text-contain/ninja.jpg','res_img/text-contain/ryuki2.jpg','res_img/text-contain/ryuki.jpg',
    'res_img/text-contain/monk.jpg','res_img/text-contain/chu.jpg','res_img/text-contain/reaper2.jpg'
];
var textContainer = document.querySelector('.text-container');
var currentImgIndex = 0;

function updateImage() {
    var imgElement = textContainer.querySelector('.slide-image');
    imgElement.src = imgArr[currentImgIndex];
}

function changeImageToRight() {
    currentImgIndex = (currentImgIndex - 1 + imgArr.length) % imgArr.length;
    updateImage();
}

function changeImageToLeft() {
    currentImgIndex = (currentImgIndex + 1) % imgArr.length;
    updateImage();
}

alterLeft.addEventListener("click", changeImageToLeft);
alterRight.addEventListener("click", changeImageToRight);

//control media volume
const audio=document.getElementById('audio');
audio.volume = 0.5;  // 设置音量为50
