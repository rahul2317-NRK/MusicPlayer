const albums = [
    {
            title: "Devara Part-1",
        songs: [
            { title: "Ayudha Pooja", 
            src: "[iSongs.info] 06 - Ayudha Pooja.mp3", 
            artist: "Kala Bhairava", 
            image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/09/Devara-Part-1-6.jpg" },

            { title: "Red Sea", 
            src: "[iSongs.info] 05 - Red Sea.mp3", 
            artist: "Anirudh", 
            image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/09/Devara-Part-1-6.jpg" },

            { title: "Daavudi", 
            src: "[iSongs.info] 04 - Daavudi.mp3", 
            artist: "Anirudh", 
            image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/09/Devara-Part-1-6.jpg" },

            { title: "Chuttamalle", 
            src: "[iSongs.info] 03 - Chuttamalle.mp3", 
            artist: "Anirudh", 
            image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/09/Devara-Part-1-6.jpg" },

            { title: "Fear Song", 
            src: "[iSongs.info] 02 - Fear Song.mp3", 
            artist: "Anirudh", 
            image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/09/Devara-Part-1-6.jpg" },
        ]
    },
    {
        title: "Vettaiyan",
        songs: [
            {title: "Manasilaayo", 
            artist: "Anirudh",
            src: "[iSongs.info] 01 - Manasilaayo.mp3", 
            image: "https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg" 
            },
            {
            title: "Hunter", 
            artist: "Anirudh",
            src: "[iSongs.info] 02 - Hunter Entry.mp3", 
            image: "https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg" 
            }
        ]
    },
    {
        title: "Janaka Aithe Ganaka",
        songs: [
          {
title: "Naa Favourite Naa Pellam", 
artist: "Karthik",
src: "[iSongs.info] 01 - Naa Favourite Naa Pellam.mp3", 
image: "https://www.moviespuzzle.com/wp-content/uploads/2024/09/Janaka-Aithe-Ganaka-New-Release-Date-2.jpg" 
},
{
title: "Santosham Ee Poota", 
artist: "Karthik",
src: "[iSongs.info] 05 - Santosham Ee Poota.mp3", 
image: "https://www.moviespuzzle.com/wp-content/uploads/2024/09/Janaka-Aithe-Ganaka-New-Release-Date-2.jpg" 
},
{
title: "Nuvve Naku Lokam", 
artist: "Karthik",
src: "[iSongs.info] 02 - Nuvve Naku Lokam.mp3", 
image: "https://www.moviespuzzle.com/wp-content/uploads/2024/09/Janaka-Aithe-Ganaka-New-Release-Date-2.jpg" 
}
]
        },
        {
            title: "Amaran",
            songs: [
                    {
                        title: "Hey Rangule", 
artist: "Ramya, Anurag",
src: "[iSongs.info] 01 - Hey Rangule.mp3", 
image: "https://upload.wikimedia.org/wikipedia/en/5/54/Amaran_2024_poster.jpg" 

                    },
                ]
        },
        {
            title: "Sathyam Sundaram",
            songs: [
                 {
title: "Pothoo Ne Pothoo", 
artist: "Govind",
src: "[iSongs.info] 04 - Pothoo Ne Pothoo.mp3", 
image: "https://assetscdn1.paytm.com/images/cinema/Sathyam-Sundaram--608x800-307d6560-799f-11ef-ad27-dfa11df60ee4.jpg" 
},
{
title: "Palle Seema", 
artist: "Govind",
src: "[iSongs.info] 03 - Palle Seema.mp3", 
image: "https://assetscdn1.paytm.com/images/cinema/Sathyam-Sundaram--608x800-307d6560-799f-11ef-ad27-dfa11df60ee4.jpg" 
},
{
title: "Evaro Ithanevaro", 
artist: "Govind",
src: "[iSongs.info] 01 - Evaro Ithanevaro.mp3", 
image: "https://assetscdn1.paytm.com/images/cinema/Sathyam-Sundaram--608x800-307d6560-799f-11ef-ad27-dfa11df60ee4.jpg"
}
                ]

        }
    

];

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const titleDisplay = document.getElementById('title');
const artistDisplay = document.getElementById('artist');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeControl = document.getElementById('volume');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const albumList = document.getElementById('albumList');
const searchBar = document.getElementById('searchBar');

let currentAlbum = null;
let currentSongIndex = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function loadSong(album, songIndex) {
    currentAlbum = album;
    currentSongIndex = songIndex;
    const song = album.songs[songIndex];

    if (!song) {
        console.error("Song not found at index:", songIndex);
        return;
    }

    audio.src = song.src;
    titleDisplay.textContent = song.title;
    artistDisplay.textContent = song.artist || "Unknown Artist";
    document.getElementById('cover').src = song.image;

    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    audio.onloadedmetadata = () => {
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    };
}

function playNextSong() {
    if (currentAlbum && currentSongIndex < currentAlbum.songs.length - 1) {
        currentSongIndex += 1;
        loadSong(currentAlbum, currentSongIndex);
    } else {
        console.log('No next song available');
        audio.pause();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }
}

function playPreviousSong() {
    if (currentAlbum && currentSongIndex > 0) {
        currentSongIndex -= 1;
        loadSong(currentAlbum, currentSongIndex);
    } else {
        console.log('No previous song available');
    }
}

function createMusicList(filteredAlbums = albums) {
    albumList.innerHTML = '';

    filteredAlbums.forEach((album) => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `<h3>${album.title}</h3>`;

        album.songs.forEach((song, songIndex) => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');
            songDiv.textContent = song.title;

            songDiv.addEventListener('click', () => {
                loadSong(album, songIndex);
            });

            albumDiv.appendChild(songDiv);
        });

        albumList.appendChild(albumDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createMusicList();

    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredAlbums = albums.map(album => {
            const filteredSongs = album.songs.filter(song =>
                song.title.toLowerCase().includes(query) || album.title.toLowerCase().includes(query)
            );
            return { ...album, songs: filteredSongs };
        }).filter(album => album.songs.length > 0);

        createMusicList(filteredAlbums);
    });
});

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
});

previousButton.addEventListener('click', playPreviousSong);
nextButton.addEventListener('click', playNextSong);

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(currentTime);
    progressBar.value = currentTime;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

audio.addEventListener('ended', playNextSong);

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

