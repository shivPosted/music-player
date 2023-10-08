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
