const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimiation();

function breatheAnimiation() {
  text.innerHTML = "Breath In";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "hold";

    setTimeout(() => {
      text.innerText = "Breathe Out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimiation, totalTime);
