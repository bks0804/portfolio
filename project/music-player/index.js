// console.log("welcome to spotify");

// initialize the variable

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Let me Love You",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "Cielo - HUma Huma",
    filePath: "2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "DEAF KEV - Invicible",
    filePath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "Diffrent Heaven & Ehide - MyHeart",
    filePath: "4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "Janji- heroes-Tonight-feat-Jonning",
    filePath: "5.mp3",
    coverPath: "5.jpg",
  },
  {
    songName: "rabba - salam-e-Ishq",
    filePath: "6.mp3",
    coverPath: "6.jpg",
  },
  {
    songName: "Shakhiyan - salam-e-Ishq",
    filePath: "7.mp3",
    coverPath: "7.jpg",
  },
  {
    songName: "Bhula Dena salam-e-Ishq",
    filePath: "8.mp3",
    coverPath: "8.jpg",
  },
  {
    songName: "Tumhari Kasam - salam-e-Ishq",
    filePath: "9.mp3",
    coverPath: "9.jpg",
  },
  {
    songName: "Tumhari Kasam - salam-e-Ishq",
    filePath: "10.mp3",
    coverPath: "10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to event
audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  // update Seeker

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

masterPlay.addEventListener("click", togglePlayPause);
    audioElement.addEventListener("timeupdate", updateTimer);
    myProgressBar.addEventListener("input", updateProgressBar);

    function togglePlayPause() {
        if (isPlaying) {
            audioElement.pause();
            playPauseBtn.textContent = "Play";
        } else {
            audioElement.play();
            playPauseBtn.textContent = "Pause";
        }
        isPlaying = !isPlaying;
    }

    function updateTimer() {
        const minutes = Math.floor(audioElement.currentTime / 60);
        const seconds = Math.floor(audioElement.currentTime % 60);
        currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function updateProgressBar() {
        const progress = myProgressBar.value / 100;
        audioElement.currentTime = audioElement.duration * progress;
    }