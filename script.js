// Countdown a la boda
function countdown() {
    const weddingDate = new Date('2025-11-30T14:00:00'); // 2:00 PM
    const now = new Date();
    const diff = weddingDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s restantes`;
    } else {
        document.getElementById('countdown').innerHTML = '¡El día ha llegado!';
    }
}
setInterval(countdown, 1000);

// Reproducir audio
function playAudio(id) {
    const audio = document.getElementById(id);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}