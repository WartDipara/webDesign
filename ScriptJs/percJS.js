function handleFileInputChange(event) {
    var files = event.target.files;
    if (files.length > 0) {
        var file = files[0];
        displayPreviewImage(file);
    }
}

function displayPreviewImage(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        var picture = document.querySelector('.container .item-box .item-center > picture');
        while (picture.firstChild) {
            picture.removeChild(picture.firstChild);
        }
        picture.appendChild(img);
    };

    reader.readAsDataURL(file);
}

document.getElementById('imgUpload').addEventListener('change', handleFileInputChange);

const audio=document.getElementById('audio');
audio.volume = 0.3;  // 设置音量为30