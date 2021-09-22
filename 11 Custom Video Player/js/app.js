// Var
const getVideo = document.querySelector(".viewer");
const getSkip = document.querySelectorAll(".player__button");
const getPlay = document.querySelector(".toggle");
const getSlider = document.querySelectorAll(".player__slider");
const getReset = document.querySelector(".getReset");
const getProgress = document.querySelector(".progress");
const getProgressFilled = document.querySelector(".progress__filled");

// Play and Pause on screen
getVideo.addEventListener("click", () => {
  if (getVideo.paused) {
    getVideo.play();
    getPlay.innerText = "⏸️";
  } else {
    getVideo.pause();
    getPlay.innerText = "▶️";
  }
});

// Play and Pause Button
getPlay.addEventListener("click", () => {
  if (getVideo.paused) {
    getVideo.play();
    getPlay.innerText = "⏸️";
  } else {
    getVideo.pause();
    getPlay.innerText = "▶️";
  }
});

// Forward and Backward
getSkip.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.skip === "10") {
      getVideo.currentTime -= 10;
    } else if (button.dataset.skip === "25") {
      getVideo.currentTime += 25;
    }
  });
});

// Reset playBackRate
getReset.addEventListener("click", () => {
  if (getVideo.playbackRate != 1) {
    getVideo.playbackRate = 1;
    getSlider[1].value = 1;
  }
});

// Sliders
getSlider.forEach((slider) => {
  slider.addEventListener("change", (e) => {
    if (slider.name === "volume") {
      getVideo.volume = e.target.value;
    } else if (slider.name === "fastFoward") {
      getVideo.playbackRate = e.target.value;
    }
  });
});

// Progress Bar
getVideo.addEventListener("timeupdate", () => {
  const grabProgress = getVideo.currentTime / getVideo.duration;
  getProgressFilled.style.flexBasis = `${grabProgress * 100}%`;
});

// Progress Bar Click
getProgress.addEventListener("click", (e) => {
  const grabProgress = e.offsetX / getProgress.offsetWidth;
  getVideo.currentTime = grabProgress * getVideo.duration;
});
