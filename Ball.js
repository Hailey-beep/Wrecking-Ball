class Ball {

    constructor(x,y) {
        this.body = Bodies.circle(x,y,100, {restitution:1, frictionAir:0.006, density:1.2})
        this.r = 50;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r, this.r)
    }
}