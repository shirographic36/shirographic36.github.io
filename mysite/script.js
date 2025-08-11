document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-youtube-id]").forEach(function (el) {
    const videoId = el.getAttribute("data-youtube-id");
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    el.src = thumbnailUrl;
  });
});
