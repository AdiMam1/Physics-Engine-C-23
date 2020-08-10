class Box{
    constructor(x,y, width, height){
        this.width = width;
        this.height = height;
        var options = {
            restitution: 1.0,
            friction: 0.3
        }
        this.obj = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.obj);
    }

    display(){
        fill("yellow");
        var pos = this.obj.position;
        var angle = this.obj.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
}