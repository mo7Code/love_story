import { randomNum } from "@/utils/utils";
export default function() {
  const canvas = document.getElementById("trees-canvas");
  const ctx = canvas.getContext("2d");

  const branch = (l) => {
    if (l > 8) return;
    ctx.save();
    ctx.scale(1 - l * 0.1, 0.5);
    ctx.fillRect(-0.5, -0.5, 1, 1);
    ctx.restore();
    if (Math.random() * 1.04 < 0.04) {
      ctx.save();
      ctx.translate(-0.1, 0);
      ctx.rotate(((Math.random() * 5 + 15) * Math.PI) / 180);
      ctx.translate(0, 0.3);
      ctx.scale(0.7 * 0.9999995, 0.7 * 0.9999995);
      branch(l + 1);
      ctx.restore();
      ctx.translate(0.1, 0);
      ctx.rotate(((-Math.random() * 15 - 10) * Math.PI) / 180);
      ctx.translate(0, 0.3);
      ctx.scale(0.7 * 0.9999995, 0.7 * 0.9999995);
      branch(l + 1);
    } else {
      ctx.rotate(((Math.random() * 10 - 5) * Math.PI) / 180);
      ctx.translate(0, 0.3);
      ctx.scale(0.9999995, 0.9999995);
      branch(l);
    }
  };
  const requestAnimationFrame = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.requestAnimationFrame(resolve);
      }, 1200);
    });
  };
  let running = false;

  async function start() {
    if (running === true) return;
    running = true;
    const w = (canvas.width = canvas.offsetWidth * 2);
    const h = (canvas.height = canvas.offsetHeight * 2);
    ctx.fillStyle = "#738073";
    ctx.fillRect(0, 0, w, h);
    const maxLen = 34;
    for (let i = 0; i < maxLen; i++) {
      ctx.save();
      ctx.translate(w * 0 + Math.random() * w * 1, h);
      ctx.scale(-20 - i * 0.5, -20 - i * 0.5);
      ctx.fillStyle = `hsl(0, 0%, ${100 - i * 3}%)`;
      branch(0);
      ctx.restore();
      await requestAnimationFrame();
    }
    running = false;
  }

  return start();
}
