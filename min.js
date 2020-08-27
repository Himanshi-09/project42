class Minute{
    constructor(x,y){
     this.body = Bodies.rectangle(x,y,width,height);
     this.width = 200;
     this.height = 10;
     World.add(world,this.body);
    }
    display(){
        var hr = hour();
        var mn = minute();
        var sc = second();
        var scAngle = map(mn,0,45,0,360);
        //var pos = this.body.position;
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate(scAngle);
        strokeWeight(4);
        fill ("green");
        rect(0,0,this.width,this.height);
        pop ();
    }
}