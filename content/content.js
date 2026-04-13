let timeout;
let settingsCache = {
  enabled: true,
  skipIntro: true,
  nextEpisode: true
};
console.log("Skipr running...");

try {
  chrome.storage.local.get(["enabled","skipIntro", "nextEpisode"], (settings) => {
    if (chrome.runtime?.id) {
      settingsCache = { ...settingsCache, ...settings };
    }
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (!chrome.runtime?.id) return;
    if (changes.enabled) settingsCache.enabled = changes.enabled.newValue;
    if (changes.skipIntro) settingsCache.skipIntro = changes.skipIntro.newValue;
    if (changes.nextEpisode) settingsCache.nextEpisode = changes.nextEpisode.newValue;
  });
} catch (e) {
  console.warn("Extension context invalidated, ignoring...");
}

function skipIntro() {
  const btn = document.querySelector('button[data-uia="player-skip-intro"]');

  if (btn && !btn.dataset.clicked) {
    console.log("Skipping intro...");
    btn.click();
    btn.dataset.clicked = "true";
  }
}

function nextEpisode() {
  const btn = document.querySelector(
    'button[data-uia="next-episode-seamless-button"]'
  );

  if (btn && !btn.dataset.clicked) {
    console.log("Playing next episode...");

    let attempts = 0;

    const interval = setInterval(() => {
      const currentBtn = document.querySelector(
        'button[data-uia="next-episode-seamless-button"]'
      );

      if (currentBtn) {
        currentBtn.click();
        attempts++;
      } else {
        clearInterval(interval);
        return;
      }

      if (attempts >= 5) {
        clearInterval(interval);
        if (currentBtn) {
          currentBtn.dataset.clicked = "true";
        }
      }
    }, 300);
  }
}

function runSkipr() {
  if (settingsCache.enabled === false) return;
  
  if (settingsCache.skipIntro !== false) {
    skipIntro();
  }

  if (settingsCache.nextEpisode !== false) {
    nextEpisode();
  }
}

const observer = new MutationObserver(()=>{
    clearTimeout(timeout);
  timeout = setTimeout(() => {
    runSkipr();
  }, 300); 
});

observer.observe(document.body,{
    childList: true,
    subtree:true
});
