class Chain {
    constructor (b1,b2) {
        var options=
        {
            
            bodyA: b1, 
            pointB: b2,
            stiffness: 0.04,
            length: 10

        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

        this.pointB=b2;
    }

    display()
    {
        if(this.chain.bodyA)
        {
        var pos1, pos2;
        pos1=this.chain.bodyA.position;
        pos2=this.pointB;
        push();
        strokeWeight(5);
        pop();
        line (pos1.x, pos1.y, pos2.x, pos2.y);
        }
    }

    fly()
    {
        
        this.chain.bodyA = null;

    }
}

