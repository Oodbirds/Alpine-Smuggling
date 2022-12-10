//declaration of variables 
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
let pageList = [];

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

//jquery for animation
$(document).ready(function() {
    $("#menu").hover(
      function(){
        $("#menu").stop().animate({left: "0px", height: "300px", width: "400px"}, 500 );
      },
      function(){
        $("#menu").stop().animate({left: "-150px", height: "70px", width: "250px"}, 500 );
      }
    );
});

//retrieveing storaage and storing new data
getStorage();
pageList.push("page1");
setStorage();
function setStorage(){
    const pagesArray = Array.from(pageList);
    const pageString = JSON.stringify(pagesArray);
    localStorage.setItem('pages', pageString);
}
function getStorage(){
    const pagesArrayString = localStorage.getItem('pages');
    const pagesArray = JSON.parse(pagesArrayString);
    if(pagesArray != null){
        for (let page of pagesArray) {
            pageList.push(page);
        }
    }   
}

//preloading all images in page
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
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    myPTag.position(windowWidth/1.8,windowHeight/11-100);
    start.position(windowWidth/1.8,(windowHeight/11)+100);
  }

//instatiating window and page format
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);

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
    myPTag.position(windowWidth/1.8,windowHeight/11-100);
    start.position(windowWidth/1.8,(windowHeight/11)+100);
}
//function to scroll title
function moveText(text1,text2){
    text1.position(window.screen.width/1.7,(window.screen.height/11-100)-scrollPos);
    text2.position(window.screen.width/1.7,((window.screen.height/11)+100)-scrollPos);
}
//function to generate animations
function draw(){
    noTint();
    image(sky,0,0);
    image(sunset,0,0-scrollPos);
     for (let i = 0; i< cloudArray.length; i++){
         cloudArray[i].moveX();
         cloudArray[i].display();   
     }
    image(mountain, 0, 0, width, height);
    image(colorFilter,0,0-scrollPos);
    image(mountainFront,0,0,width,height);
    if(lightsOn){
        image(light,0,0,width, height);
    }
}

//making text with Vara
function makeNextText(){
    var fontSize = 60;
if(window.screen.width < 700) 
  fontSize = 20;
else if(window.screen.width < 1200)
  fontSize= 40;
    nextText = true;
    var vara = new Vara("#narration","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"As the sun sets over the Alpine ridge seperating Switzerland and France, a single guard keeps watch. For it is on moonles, cloudy nights like these that smugglers will use this path to sneak across the border.",
        y: windowHeight/10,
        duration: 10000,
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
        textAlign: "center",
        width: "50px"
    });

    vara.ready(function() {
        var erase = true;
        vara.get("page2").container.style.cursor = "pointer";
        vara.get("page2").container.onclick = function() {
          document.querySelector("#page2").click();
        };
      });
    console.log("making text");
}

//record mouse movements and scroll
function mouseWheel(event) {

    scrollPos += event.delta;
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
    }
    moveText(myPTag,start);
    return false;

}
