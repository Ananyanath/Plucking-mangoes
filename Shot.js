class Shot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }

    display(){
        var pointA = this.shot.bodyA.position;
        var pointB = this.shot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}