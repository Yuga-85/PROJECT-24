class Basket {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.basketWidth = 200;
        this.basketHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;
        
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.basketWidth,this.wallThickness,{isStatic:true});
        this.leftWallBody = Bodies.rectangle(this.x-this.basketWidth/2, this.y-this.basketHeight/2, this.wallThickness, this.basketHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftWallBody,this.angle);

        this.rightWallBody = Bodies.rectangle(this.x+this.basketWidth/2, this.y-this.basketHeight/2,this.wallThickness, this.basketHeight, {isStatic: true});
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);


    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("blue");
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness, this.basketHeight);
        pop()

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("blue");
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness, this.basketHeight);
        pop()

        push()
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("blue");
        stroke(255);
        rect(0,0,this.basketWidth, this.wallThickness);
        pop()
    }
}