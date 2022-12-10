//decalring varibales
let img;
let img2;
let img3;
let img4;
let scrollPos = 0;
let pageList = [];

var introDone = false;
var smuggler2 = false;
var smuggler3 = false;

//retiecing storage 
getStorage();
pageList.push("page3");
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
//animation map for menu 
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

//preloading function and features and images
function preload() {
	img = loadImage('../resources/page3/BackgroundPlaceHolder.png');
    light = loadImage("../resources/page3/FlashyLight.png");
    img2 = loadImage("../resources/IMG_0887.PNG");
    img3 = loadImage("../resources/IMG_0885.PNG");
    img4 = loadImage("../resources/IMG_0889.PNG");

}
function makeNextText(){
    var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
    nextText = true;
    var vara = new Vara("#narration","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"Though most smugglers were familiar with the mountains, crossing them in complete darkness remained very dangerous. They could not walk on any established paths, for fear of getting caught by border police patrolling the area.",
        y: windowHeight/10,
        
        duration: 25000,
        }, 
    ],
    {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: fontSize,
        textAlign: "center"
    });
    
    vara.ready(function() {
        var erase = true;
            vara.animationEnd(function(i, o) {
           if (i == "no_erase") erase = false;
           if (erase) {
             o.container.style.transition = "opacity 1s 4s";
             o.container.style.opacity = 0;
           }
        });
      });
}

//function for first found object dialogue
function firstSmuggler(){
    introDone = true;
    var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
    nextText = true;
    var vara = new Vara("#firstSmuggler","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"Smuggling was a serious crime, that could result in up to 50 years in prison.",
        y: windowHeight/10,
        duration: 4000,
        }, 
    ],
    {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: 60,
        textAlign: "center"
    });
    
    vara.ready(function() {
        var erase = true;
            vara.animationEnd(function(i, o) {
                console.log("animation end");
           if (i == "no_erase") erase = false;
           if (erase) {
            console.log("container inside" + o.container.innerText);
             o.container.style.transition = "opacity 1s 4s";
             o.container.style.opacity = 0;
             o.container.innerText = "";
             console.log("container inside" + o.container.innerText);
           }
        });
      });
}

//function for second found object and dialogue
function secondSmuggler(){
    smuggler2 = true;
    var fontSize = 30;
if(window.screen.width < 700) 
  fontSize = 24;
else if(window.screen.width < 1200)
  fontSize= 30;
    nextText = true;
    var vara = new Vara("#secondSmuggler","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"Additionally, most smuggling happened in the early Spring or late Winter months, when snow made the journey much harsher.",
        y: windowHeight/10,
        duration: 15000,
        }, 
    ],
    {
        strokeWidth: 2,
        color: "#FFFFFF",
        fontSize: 60,
        textAlign: "center"
    });
    
    vara.ready(function() {
        var erase = true;
            vara.animationEnd(function(i, o) {
                console.log("animation end");
           if (i == "no_erase") erase = false;
           if (erase) {
            console.log("container inside" + o.container.innerText);
             o.container.style.transition = "opacity 1s 4s";
             o.container.style.opacity = 0;
             o.container.innerText = "";
             console.log("container inside" + o.container.innerText);
           }
        });
      });
}

//function for third found element and dialogue
function thirdSmuggler(){
    smuggler3 = true;
    var fontSize = 30;
if(window.screen.width < 700) 
  fontSize = 30;
else if(window.screen.width < 1200)
  fontSize= 24;
    nextText = true;
    var vara = new Vara("#narration","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"But for many of the poor people living in the region, the rewards were worth the risks.",
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
        fontSize: 60,
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

//addjusting image sizes
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    myPTag.position(windowWidth/1.8,windowHeight/11-100);
    start.position(windowWidth/1.8,(windowHeight/11)+100);
}

//initilaize features and images
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
    image(img,0,0,window.screen.width,window.screen.height);
    makeNextText();
}

//track mouse movements
function mouseMoved(){
    console.log(mouseX + " " + mouseY)
    if( !introDone){
        if (mouseX > 150 && mouseX < 500 && mouseY < 1100 && mouseY > 800){
            console.log("located");
            
            firstSmuggler();
        }
    }
    if(introDone && !smuggler2){
        if (mouseX > 1100 && mouseX < 1600 && mouseY > 500 && mouseY < 800){
            console.log("located 2");
            
            secondSmuggler();
        }
    }
    if( smuggler2 && !smuggler3){
        if (mouseX > 800 && mouseX < 1200 && mouseY < 300 && mouseY > 0){
            console.log("located");
            
            thirdSmuggler();
        }
    }
}

// frame based animations
function draw() {
    image(img2,0,0,window.screen.width,window.screen.height);
    //console.log("nothere");
    if(introDone && !smuggler2){
        image(img3,0,0,window.screen.width,window.screen.height);
    }
    else if(introDone && !smuggler3){
        //console.log("were here");
        image(img4,0,0,window.screen.width,window.screen.height);
    }
    image(light, mouseX - window.screen.width, mouseY - window.screen.height,(window.screen.width*2),(window.screen.height*2));
}

//mosuse sroll tracker
function mouseWheel(event) {
    console.log("scroll" + scrollPos);

    scrollPos += event.delta;
    if (scrollPos >= 3500) {
        lightsOn = true;
        tintVal = -150;
        scrollPos = 3500;
            print("texting texting");
            makeNextText();      
    }
    else if (scrollPos <= 0) {
      scrollPos = 0;

    }
    return false;

}