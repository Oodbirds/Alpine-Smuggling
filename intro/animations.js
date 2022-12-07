let mountain;
let mountainFront;
let sky;
let sunset;
let colorFilter;
let light;
let cloud1;
let cloud2;
let cloud3;
let cloud4;
let cloud5;
let cloud6;
let scrollPos = 0;
let cloudArray = [];
let cloud;
let currentCloud;
let tintVal = 0;;
let rectangle_test;
let lightsOn;

let myPTag;
let nextText;
let valfont;
function preload(){
    mountain = loadImage("./resources/Mountain.png");
    mountainFront = loadImage("./resources/LineArt.png");
    sky = loadImage("./resources/Sky.png");
    sunset = loadImage("./resources/Sunset.png");
    colorFilter = loadImage("./resources/ColorFilter.png");
    light = loadImage("./resources/Lights.png");
    cloud1Img = loadImage("./resources/Cloud1.png");
    cloud3Img = loadImage("./resources/Cloud3.png");
    cloud4Img = loadImage("./resources/Cloud4.png");
    cloud5Img = loadImage("./resources/Cloud5.png");
    cloud6Img = loadImage("./resources/Cloud6.png");

    valfont = loadFont("../libraries/other/Satisfy/Satisfy-Regular.ttf");

    console.log("making text");    
    lightsOn = false;
}
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    
    //loadClouds();
    cloud1 = new Cloud(cloud1Img,random(-450,1920),random(-100,200),"big"); 
    cloud3 = new Cloud(cloud3Img,random(-450,1920),random(-100,200),"small"); 
    cloud6 = new Cloud(cloud6Img,random(-450,1920),random(-100,200),"small");
    cloud4 = new Cloud(cloud4Img,random(-450,1920),random(-100,200),"big");
    cloud5 = new Cloud(cloud5Img,random(-450,1920),random(-100,200),"big");

    cloudArray = [cloud1,cloud3,cloud4,cloud5,cloud6];
    
    rectangle_test = createGraphics(1920,1080);
    rectangle_test.background(102, 0, 102);
    rectangle_test = rectangle_test.get();
    myPTag = createP("Alpine Smuggling");
    start = createP("scroll to begin");
    start.style("font-size","40px");
    start.style("font-family","Satisfy");
    myPTag.style("font-size","100px");
    myPTag.style("font-family","Satisfy");
    myPTag.position(window.screen.width/1.8,window.screen.height/11-100);
    start.position(window.screen.width/1.8,(window.screen.height/11)+100);

}
function moveText(text1,text2){
    text1.position(window.screen.width/1.7,(window.screen.height/11-100)-scrollPos);
    text2.position(window.screen.width/1.7,((window.screen.height/11)+100)-scrollPos);
}
function draw(){
    noTint();
    image(sky,0,0);
    image(sunset,0,0-scrollPos);
     for (let i = 0; i< cloudArray.length; i++){
         cloudArray[i].moveX();
         //tint(255 + tintVal,255 + tintVal,255)
         cloudArray[i].display();   
     }
    //let rec_test = rect(0,0,1920,1080)
    //if(nextText){
        //tint(255 + tintVal,255 + tintVal,255)
    //}
    image(mountain, 0, 0, width, height);
    image(colorFilter,0,0-scrollPos);
    image(mountainFront,0,0,width,height);
    if(lightsOn){
        image(light,0,0,width, height);
    }
    //image(rectangle_test,0,0);
    
    //image(sky,0,0);
}

class Cloud {
    constructor(img,startX, startY,ratio) {
        this.rat = ratio;
        this.image = img;
        this.x = startX;
        this.y = startY;
        if (ratio == "big"){
            this.height = this.image.height/4;
            this.width = this.image.width/4
        }
        else{
            this.height = this.image.height/6;
            this.width = this.image.width/6;
        }

        this.image.resize(this.width,this.height);
        
    }
      
    moveX() {
        this.x += 1;
        if (this.x > width+ 300) {
        this.x = random(-600,-300);
        this.y = random(-100,200);
        }
    }

    display() {
       
        image(this.image,this.x,this.y);
    }
        
}
function makeNextText(){
    var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
    nextText = true;
    var vara = new Vara("#narration","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"Hello World!! This is place holder text please ignore me ignore. Isn't this a fun website??",
        y: windowHeight/10,
        duration: 4000,
        }, 
        {
            text: "continue...",
            color: "#faf5b6",
            id: "page2",
            delay: 3000,
        }
    ],
    {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: fontSize,
        textAlign: "center"
    });
    
    vara.ready(function() {
        var erase = true;
        // vara.animationEnd(function(i, o) {
        //   if (i == "no_erase") erase = false;
        //   if (erase) {
        //     o.container.style.transition = "opacity 1s 1s";
        //     o.container.style.opacity = 0;
        //   }
        // });
        vara.get("page2").container.style.cursor = "pointer";
        vara.get("page2").container.onclick = function() {
          document.querySelector("#page2").click();
        };
      });
    console.log("making text");
}
function changeTint(pos,delta){
    console.log("delta"+delta)
    if (delta > 0){
        tintVal -= 5;
        console.log("igher");
    }
    else{
        console.log("lower");
        tintVal += 5;
    }
    console.log(tintVal);
}
function mouseWheel(event) {
    console.log("scroll" + scrollPos);

    scrollPos += event.delta;
    //console.log(scrollPos);
    if (scrollPos >= 3500) {
        lightsOn = true;
        tintVal = -150;
        scrollPos = 3500;
        if(!nextText){
            makeNextText();
        }
      
    }
    else if (scrollPos <= 0) {
      scrollPos = 0;
      //makeNextText();
    }
    else{
        print("changeTint");
        changeTint(scrollPos, event.delta);
        
    }
    moveText(myPTag,start);
    return false;

}

console.log("what up");