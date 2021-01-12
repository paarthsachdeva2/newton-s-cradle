class Roof {
    constructor(x,y,width,height){
         
  var option ={
      isStatic:true,
  }
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  this.body =Bodies.rectangle(x,y,width,height,option)
  World.add(world,this.body)
    }

   display(){
  var pos=this.body.position;
  push()
  translate(pos.x,pos.y)

  rectMode(CENTER);
  fill("yellow");
  rect(0,0,this.width,this.height);
   pop()
   }
 }