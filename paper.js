class paper{
  constructor(x,y){
      var options = {
      isStatic:false,
      restitution:0.8,
      density:1
      }
      this.body = Bodies.circle(x,y,20,options)
      World.add(world,this.body)
  }
     display(){
         ellipseMode(RADIUS)
         fill("yellow")
         ellipse(this.body.position.x,this.body.position.y,20,20)
     }
    
}