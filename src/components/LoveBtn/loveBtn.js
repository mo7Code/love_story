export default function() {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const COUNT = 360 / 6;
  const BTN = document.querySelectorAll(".button");

  const setParticles = (b) => {
    const PARTICLES = b.querySelectorAll(".heart__particle");
    PARTICLES.forEach((particle, index) => {
      const CHARACTER = {
        "--d": random(30, 60),
        "--r": (360 / 25) * index,
        "--h": random(0, 360),
        "--t": random(25, 50) / 100,
        "--s": random(20, 60) / 100,
      };

      particle.setAttribute(
        "style",
        JSON.stringify(CHARACTER)
          .replace(/,/g, ";")
          .substring(1, JSON.stringify(CHARACTER).length - 1)
          .replace(/"/g, ""),
      );
    });
  };

  BTN.forEach((b) => {
    setParticles(b);
    b.addEventListener("click", () => {
      b.classList.toggle("button--active");
      if (b.classList.contains("button--active")) setParticles(b);
    });
  });
}
