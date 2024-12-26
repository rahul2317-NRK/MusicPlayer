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

let currentAlbumIndex = 0;
let currentSongIndex = 0;
let currentAlbum = []; // To hold the current album data

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function loadSong(src, title, artist = "Unknown Artist", image) {
    if (!audio || !titleDisplay || !artistDisplay) return;

    audio.src = src;
    titleDisplay.textContent = title;
    artistDisplay.textContent = artist;
    const coverImage = document.getElementById('cover');
    if (coverImage) coverImage.src = image;

    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    const playerSection = document.getElementById('player-section');
    if (playerSection) {
        playerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    audio.onloadedmetadata = () => {
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    };
}

function createMusicList() {
    const albumList = document.getElementById('albumList');
    if (!albumList || !albums) return;

    albumList.innerHTML = ''; // Clear existing content
    albums.forEach(album => displayAlbum(album));
}

function displayAlbum(album) {
    const albumList = document.getElementById('albumList');
    if (!albumList) return;

    const albumDiv = document.createElement('div');
    albumDiv.classList.add('album');
    albumDiv.innerHTML = `<h3>${album.title}</h3>`;
    
    album.songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');
        songDiv.textContent = song.title;
        songDiv.setAttribute('data-src', song.src);
        songDiv.setAttribute('data-image', song.image);
        songDiv.addEventListener('click', () => {
            loadSong(song.src, song.title, song.artist, song.image);
            currentAlbumIndex = albums.indexOf(album); // Update current album
            currentSongIndex = album.songs.indexOf(song); // Update current song index
        });
        albumDiv.appendChild(songDiv);
    });

    albumList.appendChild(albumDiv);
}

// Play/Pause functionality
playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
});

// Time update and progress bar handling
audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    progressBar.value = audio.currentTime;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Search functionality
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('input', performSearch);

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const albumList = document.getElementById('albumList');
    if (!albumList) return;

    albumList.innerHTML = ''; // Clear the current album list

    albums.forEach(album => {
        if (album.title.toLowerCase().includes(searchTerm)) {
            displayAlbum(album);
        } else {
            const matchingSongs = album.songs.filter(song =>
                song.title.toLowerCase().includes(searchTerm)
            );
            if (matchingSongs.length > 0) {
                const filteredAlbum = { ...album, songs: matchingSongs };
                displayAlbum(filteredAlbum);
            }
        }
    });

    if (searchTerm === '') createMusicList();
}

// Handle song transitions when current song finishes
audio.addEventListener('ended', () => {
    if (currentSongIndex < currentAlbum.songs.length - 1) {
        currentSongIndex++;
        const nextSong = currentAlbum.songs[currentSongIndex];
        loadSong(nextSong.src, nextSong.title, nextSong.artist, nextSong.image);
    } else {
        // If it's the last song, do nothing or reset to first song
        currentSongIndex = 0; // Optionally reset to first song in the album
        const firstSong = currentAlbum.songs[currentSongIndex];
        loadSong(firstSong.src, firstSong.title, firstSong.artist, firstSong.image);
    }
});

// Previous and Next song buttons
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = currentAlbum.songs.length - 1; // Go to last song if at the start
    }
    const prevSong = currentAlbum.songs[currentSongIndex];
    loadSong(prevSong.src, prevSong.title, prevSong.artist, prevSong.image);
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentSongIndex < currentAlbum.songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Go to first song if at the end
    }
    const nextSong = currentAlbum.songs[currentSongIndex];
    loadSong(nextSong.src, nextSong.title, nextSong.artist, nextSong.image);
});

// Update progress bar background
progressBar.addEventListener('input', () => {
    const value = progressBar.value / progressBar.max * 100;
    progressBar.style.background = `linear-gradient(to right, #707b7c ${value}%, #bdc3c7 ${value}%)`;
});

document.addEventListener('DOMContentLoaded', () => {
    createMusicList();
});


