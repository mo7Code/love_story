export default function() {
  const $button = document.getElementById("button");

  let debounce = false;
  $button.addEventListener("click", () => {
    if (debounce) return;
    debounce = true;
    buttonAnimate();
    createWave();
  });

  const buttonAnimate = () => {
    $button.classList.add("clicked");
    setTimeout(() => {
      $button.classList.remove("clicked");
      debounce = false;
    }, 700);
  };

  const createWave = () => {
    const wave = document.createElement("div");
    wave.classList.add("wave");
    document.getElementById("wavesBtn").appendChild(wave);
    setTimeout(() => wave.remove(), 7000);
  };
}
