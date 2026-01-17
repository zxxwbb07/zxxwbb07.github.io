const music = document.getElementById("music");

function hideAll() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
}

function openYes() {
  hideAll();
  document.getElementById("screenYes").classList.add("active");
  music.play();
  startHearts();
}

function openNo() {
  hideAll();
  document.getElementById("screenNo").classList.add("active");
}

function runAway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

function startHearts() {
  const container = document.querySelector(".hearts");
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
