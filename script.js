function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;

document.getElementById("start-button").addEventListener("click", (e) => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.getElementById("stop-button").addEventListener("click", (e) => {
  clearInterval(intervalId);
  intervalId = null;
});
