class Build {

    constructor(x,y) {
        this.body = Bodies.rectangle(x,y,70,70, {restitution:0.4, friction:0.8, density:1.2})
        this.width = 70;
        this.height = 70;

        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        rectMode(CENTER)
        translate(pos.x, pos.y)
        rotate(angle)
        fill("grey")
        rect(0, 0, this.width, this.height);
        pop()
    }
}