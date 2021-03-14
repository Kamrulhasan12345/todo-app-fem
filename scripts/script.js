document.querySelector(".mode__switch").onclick = function () {
  document.body.classList.contains("dark") ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"));
}

if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("../service-worker.js");
}