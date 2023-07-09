import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    
    const onPlay = function({seconds}){
localStorage.setItem("video-current-time", JSON.stringify(seconds))
    }
    player.on('timeupdate', onPlay)
    const currentTime = localStorage.getItem("video-current-time");
    player.setCurrentTime(currentTime || 0)