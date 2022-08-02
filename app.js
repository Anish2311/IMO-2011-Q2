var points = []
var avx = []
var avy = []
var m = 0;
var ly
var lx
var r1 = 640*2;
// var r2 = -600;
var active = false;
var fm

function setup(){
    createCanvas(1350,640)
    for(var i = 0; i < 10; i++){
        points.push(createVector((random(width)),random(height)))
    }
    rtx = points[1].x
    translate(width/2,height/2)
    rty = points[1].y
}

function draw(){
    background(0)
    
    for(var u = 0; u < points.length; u++){
        let v = points[u]
        stroke(255)
        strokeWeight(8)
        point(v.x,v.y)
    }
    
    checking()
    rotater(rtx,rty)

    if(frameCount == fm + 10){
        active = false
        console.log(active);
    }

    stroke(255,0,200)
    strokeWeight(16)
    point(rtx,rty)
    
}

function checking(){
    points.forEach(dot => {
        if(active == false){
            if(dot.x != rtx || dot.y != rty){
                // translate(0,0)
                if(collidePointLine(dot.x,dot.y,-lx + rtx,-ly + rty,lx + rtx,ly + rty,0.05)){
                    rtx = dot.x
                    rty = dot.y
                    active = true
                    console.log('colliding',dot.x,dot.y,rtx,rty,active);
                    
                    fm = frameCount
                    m += 0.01
                    // r1 = dist(rtx,rty,lx,ly)
                    // r2 = - dist(rtx,rty,lx2,ly2)
                }
            }
        }
    });
}

function rotater(x,y){
    // active = false
    m = m + 0.01
    push()
    lx = cos(m)*r1
    ly = sin(m)*r1
    
    // translate(x,y);
    stroke(255);
    strokeWeight(2);
    line(-lx + x,-ly + y,lx + x,ly + y)
    pop()
}