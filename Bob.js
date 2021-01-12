class Bob{
    constructor(x,y,radius){

       var options={
           isStatic:false,
           restitution:1,
           friction:0, 
           density:0.8,
       }

      this.radius=radius;
      this.x=x;
      this.y=y;
      this.body= Bodies.circle(this.x,this.y,(this.radius/2),options);

      World.add(world,this.body);
}
  
  display(){

   var bobpos =this.body.position 
   push()
   translate(bobpos.x,bobpos.y)
   ellipse(0,0,this.radius,this.radius)
   pop()

  }

}
