console.log("Skipr running...");

function skipIntro() {
  const btn = document.querySelector('button[data-uia="player-skip-intro"]');

  if (btn) {
    console.log("Skipping intro...");
    btn.click();
  }
}

setInterval(skipIntro, 1500);