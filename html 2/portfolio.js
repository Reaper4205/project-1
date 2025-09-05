




























var audio = new Audio('https://www.dropbox.com/scl/fi/lbmqjj2969nsfmksydoja/Death-Note-Ryuk-s-Theme-A-Music-yt.savetube.me.mp3?rlkey=uq3crsg8kgpoj5uojchcmbwvf&dl=1');
audio.loop = true;

// Play after user interaction
document.addEventListener('click', function() {
    audio.play().catch(e => console.error('Audio play failed:', e));
}, { once: true });
alert("Tap to play the music!")
alert("It works best on Pc!")
alert("do not forget to check light mod☠️💀")