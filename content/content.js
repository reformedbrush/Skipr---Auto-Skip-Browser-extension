let timeout;
console.log("Skipr running... fetaure/nextEp");

function skipIntro() {
  const btn = document.querySelector('button[data-uia="player-skip-intro"]');

  if (btn && !btn.dataset.clicked) {
    console.log("Skipping intro...");
    btn.click();
    btn.dataset.clicked = "true";
  }
}

function nextEpisode(){
    const btn = document.querySelector('button[data-uia="next-episode-seamless-button"]');
    if (btn && !btn.dataset.clicked){
        console.log("Playing next episode...");
        btn.click();
        btn.dataset.clicked = "true";
    }
}

function runSkipr() {
  chrome.storage.local.get(["skipIntro", "nextEpisode"], (settings) => {

    if (settings.skipIntro !== false) {
      skipIntro();
    }

    if (settings.nextEpisode !== false) {
      nextEpisode();
    }

  });
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
