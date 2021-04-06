document.querySelector(".mode__switch").onclick = function () {
  document.body.classList.contains("dark") ? (document.body.classList.remove("dark"), document.body.classList.add("light")) : (document.body.classList.remove("light"), document.body.classList.add("dark"));
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js')
    .then((reg) => {
      console.log(`Service worker registered. Here is it: \n${reg}`)
    }).catch((err) => {
      console.log(`Service worker could not be registered. Here is the error: \n${err}`)
    })
  })
}