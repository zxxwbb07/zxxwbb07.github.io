function hideAll() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
}

function openYes() {
  hideAll();
  document.getElementById("screenYes").classList.add("active");
}

function openNo() {
  hideAll();
  document.getElementById("screenNo").classList.add("active");
}
