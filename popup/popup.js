const skipIntro = document.getElementById("skipIntro");
const nextEpisode = document.getElementById("nextEpisode");
const enabled = document.getElementById("enabled");


[enabled,skipIntro, nextEpisode].forEach(el => {
  el.addEventListener("change", () => {
    chrome.storage.local.set({
        enabled: enabled.checked,
      skipIntro: skipIntro.checked,
      nextEpisode: nextEpisode.checked
    });
  });
});

chrome.storage.local.get(["enabled","skipIntro", "nextEpisode"], (data) => {
  if (data.enabled !== undefined)
    enabled.checked = data.enabled;
  if (data.skipIntro !== undefined)
    skipIntro.checked = data.skipIntro;

  if (data.nextEpisode !== undefined)
    nextEpisode.checked = data.nextEpisode;
});