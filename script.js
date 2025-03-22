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
            {
            title: "Hunter", 
            artist: "Anirudh",
            src: "[iSongs.info] 02 - Hunter Entry.mp3", 
            image: "https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg" 
            },
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
            title: "Sathyam Sundaram",
            songs: [
                 {
title: "Pothoo Ne Pothoo", 
artist: "Govind",
src: "[iSongs.info] 04 - Pothoo Ne Pothoo.mp3", 
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
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const titleDisplay = document.getElementById('title');
const artistDisplay = document.getElementById('artist');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeControl = document.getElementById('volume');
const albumList = document.getElementById('albumList');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

let currentAlbumIndex = 0;
let currentSongIndex = 0;
let currentAlbum = [];

// Mock data for albums and songs (replace with your data)
const albums = [
    {
        title: 'Album 1',
        songs: [
            { title: 'Song 1', artist: 'Artist 1', src: 'song1.mp3', image: 'cover1.jpg' },
            { title: 'Song 2', artist: 'Artist 2', src: 'song2.mp3', image: 'cover2.jpg' }
        ]
    },
    {
        title: 'Album 2',
        songs: [
            { title: 'Song A', artist: 'Artist A', src: 'songA.mp3', image: 'coverA.jpg' },
            { title: 'Song B', artist: 'Artist B', src: 'songB.mp3', image: 'coverB.jpg' }
        ]
    }
];

// Utility function to format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Function to load a song
function loadSong(src, title, artist, image) {
    audio.src = src;
    titleDisplay.textContent = title;
    artistDisplay.textContent = artist;
    document.getElementById('cover').src = image;

    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    currentAlbum = albums[currentAlbumIndex];
    currentSongIndex = currentAlbum.songs.findIndex(song => song.src === src);

    audio.onloadedmetadata = () => {
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    };
}

// Play and pause buttons
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

// Next and Previous buttons
prevButton.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = currentAlbum.songs.length - 1; // Loop to last song
    }
    loadSong(currentAlbum.songs[currentSongIndex].src, currentAlbum.songs[currentSongIndex].title, currentAlbum.songs[currentSongIndex].artist, currentAlbum.songs[currentSongIndex].image);
});

nextButton.addEventListener('click', () => {
    if (currentSongIndex < currentAlbum.songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Loop to first song
    }
    loadSong(currentAlbum.songs[currentSongIndex].src, currentAlbum.songs[currentSongIndex].title, currentAlbum.songs[currentSongIndex].artist, currentAlbum.songs[currentSongIndex].image);
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    progressBar.value = audio.currentTime;
});

// Progress bar input to change song position
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Display albums and songs list
function displayAlbums() {
    albumList.innerHTML = '';
    albums.forEach((album, albumIndex) => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `<h3>${album.title}</h3>`;
        
        album.songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');
            songDiv.textContent = song.title;
            songDiv.addEventListener('click', () => {
                currentAlbumIndex = albumIndex;
                loadSong(song.src, song.title, song.artist, song.image);
            });
            albumDiv.appendChild(songDiv);
        });

        albumList.appendChild(albumDiv);
    });
}

// Search functionality
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = albums.filter(album => 
        album.title.toLowerCase().includes(searchTerm) || 
        album.songs.some(song => song.title.toLowerCase().includes(searchTerm))
    );
    displayAlbums(searchResults);
});

// On DOMContentLoaded, display the albums
document.addEventListener('DOMContentLoaded', displayAlbums);



