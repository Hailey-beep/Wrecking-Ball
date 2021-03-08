class Ground {

    constructor(x,y) {

        this.body = Bodies.rectangle(x,y,1000,30, {isStatic:true})
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push()
        rectMode(CENTER)
        fill("green")
        rect(pos.x, pos.y, 1000, 30)
        pop()
    }
}