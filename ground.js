class Ground {
    constructor(x,y, width, height){
        this.width = width;
        this.height = height;
        var options = {
            isStatic : true
        }
        this.obj = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.obj);
    }

    display(){
        fill("brown");
        var pos = this.obj.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}