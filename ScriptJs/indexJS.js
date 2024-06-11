function showNav(){
    var navbar = document.getElementById('hidden-nav');
    navbar.classList.toggle('hidden');
}
document.getElementById('toggleNav').addEventListener('click', showNav);

const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const progressBar = document.getElementById('progress');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = '播放';
    } else {
        audio.play();
        playButton.textContent = '暂停';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

audio.addEventListener('ended', () => {
    playButton.textContent = '播放';
    isPlaying = false;
});

audio.volume = 0.3;  // 设置音量为30
