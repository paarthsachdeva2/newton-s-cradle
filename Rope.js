class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
     this.offsetX=offsetX
     this.offsetY=offsetY
       var options={
       bodyA:bodyA,
       bodyB:bodyB,
       pointB:{x:this.offsetX,y:this.offsetY}
       
       }
  
       this.rope=Constraint.create(options)
       World.add(world,this.rope)
  
    }
       
    display(){
        
      var pointA=this.rope.bodyA.position
      var pointB=this.rope.bodyB.position
      strokeWeight(5)
      var a1=pointA.x
      var a2=pointA.y
      var b1=pointB.x+this.offsetX
      var b2=pointB.y+this.offsetY
      line(a1,a2,b1,b2);
  
    }
  
  }