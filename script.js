"use-strict";
const playlistContainer = document.querySelector(
  ".display-container-playlists"
);
const containerPlaylistSong = document.querySelector(".playlist-songs");

playlistContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".playlist-card")) return;
  console.log(e.target);
  const playlistName = e.target.dataset.playlistName;
  playlistContainer.classList.add("hidden");
  setTimeout(() => {
    playlistContainer.style.display = "none";
  }, 500);
  containerPlaylistSong.classList.remove("hidden");
});

const num = [1, 2, 3, 4, 5, 6, 7];
const num2 = num.map((curr) => curr ** curr + 7);
const num3 = num2.filter((curr) => curr % 7 === 0);
const num4 = num3.reduce((accum, curr) => accum + curr);
console.log(num2, num3);
console.log(num4);

const string = "my name is shiv";
const result025 = string.split(" ").join("(<00x00>)");
console.log(result025);
