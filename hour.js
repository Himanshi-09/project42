class Hour{
    constructor(x,y){
     this.body = Bodies.rectangle(x,y,width,height);
     this.width = 190;
     this.height = 20;
     World.add(world,this.body);
    }
    display(){
        var hr = hour();
        var mn = minute();
        var sc = second();
        var scAngle = map(hr,0,45,0,360);
        //var pos = this.body.position;
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate(scAngle);
        strokeWeight(4);
        fill ("red");
        rect(0,0,this.width,this.height);
        pop ();
    }
}