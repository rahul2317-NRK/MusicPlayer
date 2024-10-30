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

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function loadSong(src, title, artist, image) {
    audio.src = src;
    titleDisplay.textContent = title;
    artistDisplay.textContent = artist;
    document.getElementById('cover').src = image;

    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    audio.onloadedmetadata = () => {
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    };
}

function createMusicList() {
    const albumList = document.getElementById('albumList');
    albumList.innerHTML = ''; // Clear existing content

    albums.forEach(album => {
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
            });
            albumDiv.appendChild(songDiv);
        });

        albumList.appendChild(albumDiv);
    });
}

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

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(currentTime);
    progressBar.value = currentTime;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

document.addEventListener('DOMContentLoaded', createMusicList);

//---------------------search block-------------------------------------

document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('input', performSearch);

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const albumList = document.getElementById('albumList');
    albumList.innerHTML = ''; // Clear the current album list

    albums.forEach(album => {
        // Check if the album title matches the search term
        if (album.title.toLowerCase().includes(searchTerm)) {
            displayAlbum(album);
        } else {
            // Check if any song in the album matches the search term
            const matchingSongs = album.songs.filter(song => 
                song.title.toLowerCase().includes(searchTerm)
            );
            
            if (matchingSongs.length > 0) {
                const albumDiv = document.createElement('div');
                albumDiv.classList.add('album');
                albumDiv.innerHTML = `<h3>${album.title}</h3>`;
                
                matchingSongs.forEach(song => {
                    const songDiv = document.createElement('div');
                    songDiv.classList.add('song');
                    songDiv.textContent = song.title;
                    songDiv.setAttribute('data-src', song.src);
                    songDiv.setAttribute('data-image', song.image);
                    songDiv.addEventListener('click', () => {
                        loadSong(song.src, song.title, "Unknown Artist", song.image);
                    });
                    albumDiv.appendChild(songDiv);
                });

                albumList.appendChild(albumDiv);
            }
        }
    });

    // If search term is empty, recreate the original music list
    if (searchTerm === '') {
        createMusicList();
    }
}

function displayAlbum(album) {
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
            loadSong(song.src, song.title, "Unknown Artist", song.image);
        });
        albumDiv.appendChild(songDiv);
    });

    document.getElementById('albumList').appendChild(albumDiv);
}

// Function to update the volume based on the volume slider
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

document.addEventListener('DOMContentLoaded', () => {
    createMusicList(); // Assuming this initializes your music list
});


function loadSong(src, title, artist, image) {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const titleDisplay = document.getElementById('title');
    const artistDisplay = document.getElementById('artist');
    const coverImage = document.getElementById('cover');

    audio.src = src;
    titleDisplay.textContent = title;
    artistDisplay.textContent = artist;
    coverImage.src = image;

    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    // Ensure the player section exists before trying to scroll
    const playerSection = document.getElementById('player-section');
    if (playerSection) {
        playerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('Player section not found');
    }

    audio.onloadedmetadata = () => {
        const durationDisplay = document.getElementById('duration');
        const progressBar = document.getElementById('progress-bar');
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    };
}

let currentAlbum = null;
let currentSongIndex = 0;

function loadSong(album, songIndex) {
    currentAlbum = album;
    currentSongIndex = songIndex;
    const song = album.songs[songIndex];

    // Set song information
    audio.src = song.src;
    titleDisplay.textContent = song.title;
    artistDisplay.textContent = song.artist || "Unknown Artist";
    document.getElementById('cover').src = song.image;

    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    // Scroll to player section (if exists)
    const playerSection = document.getElementById('player-section');
    if (playerSection) {
        playerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    audio.onloadedmetadata = () => {
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = audio.duration;
    };
}

// Play the next song automatically when the current song ends
function playNextSong() {
    if (currentAlbum && currentSongIndex < currentAlbum.songs.length - 1) {
        currentSongIndex += 1;
        loadSong(currentAlbum, currentSongIndex);
    } else {
        audio.pause();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }
}

// Event listener for when a song ends
audio.addEventListener('ended', playNextSong);

// Initialize album and song list
function createMusicList() {
    const albumList = document.getElementById('albumList');
    albumList.innerHTML = ''; // Clear existing content

    albums.forEach((album, albumIndex) => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `<h3>${album.title}</h3>`;

        album.songs.forEach((song, songIndex) => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');
            songDiv.textContent = song.title;

            songDiv.addEventListener('click', () => {
                loadSong(album, songIndex); // Load and play the selected song
            });

            albumDiv.appendChild(songDiv);
        });

        albumList.appendChild(albumDiv);
    });
}

document.addEventListener('DOMContentLoaded', createMusicList);


