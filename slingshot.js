class Chain{
    constructor(bodyA, ptb){
        var options = {
            bodyA: bodyA,
            pointB: ptb,
            stiffness: 0.,
            length: 10
        }
        this.pt=ptb
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
 

    fly(){
this.chain.bodyA=null

    }

    display(){
        if(this.chain.bodyA!==null){
        var pointA = this.chain.bodyA.position;
        var posB = this.pt;
        strokeWeight(4);
        line(pointA.x, pointA.y, posB.x, posB.y);
        }
    }
    
}