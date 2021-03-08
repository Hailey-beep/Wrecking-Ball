class Chain {

    constructor(bodyA, pointB) {

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 450,
            stiffness:0.5
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var posA = this.bodyA.position;
        var posB = this.pointB;

        push()
        strokeWeight(6)
        stroke("red")
        line(posA.x, posA.y, posB.x, posB.y);
        pop()
    }
}