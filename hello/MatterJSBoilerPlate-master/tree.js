class Tree {
    constructor(x, y) {
       this.position = createVector(x,y);

        this.image= loadImage("Plucking mangoes/tree.png");

        this.width = width;
        this.height = height;
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.position.x, this.position.y,700,630);
    }
}