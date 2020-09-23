  class Rock{
    constructor(x,y,r,angle){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
          }
        this.body =Bodies.circle(x,y,r/2,options,angle);
        this.r = r;
        Matter.Body.setAngle(this.body,angle);

        this.image = loadImage("Plucking mangoes/stone.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}