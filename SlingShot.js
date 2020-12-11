/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;

        this.SlingShot = Constraint.create(options);
        World.add(world, this.SlingShot);
    }
    attach(body){
        this.SlingShot.bodyA = body;
    }
    fly(){
        this.SlingShot.bodyA = null;
    }
    display(){
        if(this.SlingShot.bodyA){
            
        var pointA = this.SlingShot.bodyA.position;
        var pointB = this.pointB;
        
        stroke("white")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    
}*/

class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){

        this.sling.bodyA= null
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display(){
      if(this.sling.bodyA){


        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
    
}
