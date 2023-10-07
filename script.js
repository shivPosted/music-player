"use-strict";
const playlistContainer = document.querySelector(
  ".display-container-playlists"
);

playlistContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".playlist-card")) return;
  console.log(e.target);
  const playlistName = e.target.dataset.playlistName;
});
