class rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA=pointA
        this.pointB=pointB
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.pointA,y:this.pointB}
       
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        }
        display(){
            var pointA= this.rope.bodyA.position;
            var pointB= this.rope.bodyB.position;

            strokeWeight (2)
            var rope1X = pointA.x
            var rope1Y = pointA.y
            
            var rope2X = pointB.x+this.pointA
            var rope2Y = pointB.y+this.pointB
            line (rope1X,rope1Y,rope2X,rope2Y);
        }
        
}
