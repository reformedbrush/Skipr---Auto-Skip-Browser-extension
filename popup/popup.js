const skipIntro = document.getElementById("skipIntro");
const nextEpisode = document.getElementById("nextEpisode");


[skipIntro, nextEpisode].forEach(el => {
  el.addEventListener("change", () => {
    chrome.storage.local.set({
      skipIntro: skipIntro.checked,
      nextEpisode: nextEpisode.checked
    });
  });
});

chrome.storage.local.get(["skipIntro", "nextEpisode"], (data) => {
  if (data.skipIntro !== undefined)
    skipIntro.checked = data.skipIntro;

  if (data.nextEpisode !== undefined)
    nextEpisode.checked = data.nextEpisode;
});