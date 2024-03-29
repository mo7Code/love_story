export default function() {
  var c = document.getElementById("parallax-canvas");
  var ctx = c.getContext("2d");
  var w = (c.width = window.innerWidth);
  var h = (c.height = window.innerHeight);
  var cx = w / 2;
  var cy = h / 2;
  var Box = function(x, y, vx, color) {
    this.color = color;
    this.vx = vx;
    this.x = x;
    this.y = y;
    this.w = 10 + Math.random() * 30;
    this.h = 5 + Math.random() * 350;
  };
  Box.prototype = {
    constructor: Box,
    update: function() {
      this.x += this.vx;
      if (this.x < -this.w / 2) {
        this.x = w + this.w / 2;
      }
    },
    render: function(ctx) {
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);
      ctx.fillRect(-this.w / 2, -this.h, this.w, this.h);
      ctx.restore();
    },
  };
  var ctr = 10;
  var boxes = [];
  var boxes2 = [];
  var boxes3 = [];
  var box;
  var speed = -1;
  for (var i = 0; i < ctr; i++) {
    box = new Box(Math.random() * w, h, speed * 0.3, "#e5e5e5");
    boxes.push(box);
  }
  for (var i = 0; i < ctr; i++) {
    box = new Box(Math.random() * w, h, speed * 0.8, "#cccccc");
    boxes2.push(box);
  }
  for (var i = 0; i < ctr; i++) {
    box = new Box(Math.random() * w, h, speed, "#999999");
    boxes3.push(box);
  }
  requestAnimationFrame(function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 0.9;
    for (var i = 0, len = boxes.length; i < len; i++) {
      box = boxes[i];
      box.update();
      box.render(ctx);
    }
    for (var i = 0, len = boxes2.length; i < len; i++) {
      box = boxes2[i];
      box.update();
      box.render(ctx);
    }
    for (var i = 0, len = boxes3.length; i < len; i++) {
      box = boxes3[i];
      box.update();
      box.render(ctx);
    }
  });
}
