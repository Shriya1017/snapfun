noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas= createCanvas(250,250);
    canvas.center();
    video= createCapture(VIDEO);
    
    video.hide();
    tint_color="";
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNetisInisialized');
    }

    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            console.log("nosex="+results[0].pose.nose.x);
            console.log("nosey="+results[0].pose.nose.y);
        }
    }

function draw(){
    image(video,0,0,250,250);
    tint(tint_color);
    image(clown_nose, noseX, noseY, 50, 20);

}

function take_snapshot(){
    save('YOU.png');
    
}

function filter_tint(){
    tint_color= document.getElementById("color_name").value;
        
    
}