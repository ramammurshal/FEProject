const btnLeftTesti = document.getElementById("btn-left-testi");
const btnRightTesti = document.getElementById("btn-right-testi");
const videoTesti = document.getElementById("video-testi");

const video = ["videos/po_2021.mp4", "videos/coor_talkshow_2021.mp4", "videos/staf_oilrig_2021.mp4"];
const poster = ["poster/poster_po_2021.png", "poster/poster_coor_talkshow_2021.png", "poster/poster_staf_oilrig_2021.png"];

let index = 0;

btnLeftTesti.addEventListener("click", () => {
  if (index > 0) {
    videoTesti.src = video[index - 1];
    videoTesti.poster = poster[index - 1];
    index--;
  }
  else {
    videoTesti.src = video[2];
    videoTesti.poster = poster[2];
    index = 2;
  }
});

btnRightTesti.addEventListener("click", () => {
  if (index < 2) {
    videoTesti.src = video[index + 1];
    videoTesti.poster = poster[index + 1];
    index++;
  }
  else {
    videoTesti.src = video[0];
    videoTesti.poster = poster[0];
    index = 0;
  }
});
