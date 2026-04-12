let timeout;
console.log("Skipr running... fetaure/nextEp");

function skipIntro() {
  const btn = document.querySelector('button[data-uia="player-skip-intro"]');

  if (btn) {
    console.log("Skipping intro...");
    btn.click();
    btn.dataset.clicked = "true";
  }
}

function nextEpisode(){
    const btn = document.querySelector('button[data-uia="next-episode-seamless-button"]');
    if (btn){
        console.log("Playing next episode...");
        btn.click();
        btn.dataset.clicked = "true";
    }
}

function runSkipr(){
    skipIntro();
    nextEpisode();
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

