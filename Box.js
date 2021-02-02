class Block {
  constructor(x, y) {
    const options = {
      isStatic: false,
      restituion: 0,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    World.add(world, this.body);

    this.opacity = 255;
    this.height = 30;
    this.width = 40;
  }

  display() {
    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);

      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(angle);

      rect(0, 0, this.height, this.width);

      pop();
    } else {
      World.remove(world, this.body);
      push();
      tint(255, this.opacity);
      this.opacity = this.opacity - 5;

      // image(
      //   this.image,
      //   this.body.position.x,
      //   this.body.position.y,
      //   this.width,
      //   this.height
      // );
      pop();
    }
  }

  score() {
    if (this.opacity < 0 && this.opacity > -105) {
      score++;
    }
  }
}
