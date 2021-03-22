class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.w = width;
    this.h = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push(); 
    //push in p5 has acces to the draw state. 
    //It means : Begin Drawing
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    
    rect(0, 0, this.w, this.h);
    
    pop();
    //pop here means : Stop Drawing

    //the translate and rotate options should ONLY affect the drawing of 
    //this particular box hence the need to take this aside (push/pop)
    //before doing these changes. 
  }
};
