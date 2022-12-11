//declaring variables
let mountain2;
let sky;
let dark;
let pageList = [];

let menu;

//retireving storage infp
getStorage();
pageList.push("page2");
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
//animations for character title cards
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
$(document).ready(function() {
    $("#characterWrapper1").hover(
      function(){
        $("#inner1").stop().animate({width: "300px"}, 500 );
      },
      function(){
        $("#inner1").stop().animate({width: "0px"}, 500 );
      },
    );
});
$(document).ready(function() {
    $("#characterWrapper1").hover(
        function(){
            $("#arrow1").stop().animate({left: "525px"}, 500 );
        },
        function(){
            $("#arrow1").stop().animate({left: "200px"}, 500 );
        }
    );
});

$(document).ready(function() {
    $("#characterWrapper2").hover(
      function(){
        $("#inner2").stop().animate({width: "300px"}, 500 );
      },
      function(){
        $("#inner2").stop().animate({width: "0px"}, 500 );
      },
    );
});
$(document).ready(function() {
    $("#characterWrapper2").hover(
        function(){
            $("#arrow2").stop().animate({left: "525px"}, 500 );
        },
        function(){
            $("#arrow2").stop().animate({left: "200px"}, 500 );
        }
    );
});

$(document).ready(function() {
    $("#characterWrapper3").hover(
      function(){
        $("#inner3").stop().animate({width: "300px"}, 500 );
      },
      function(){
        $("#inner3").stop().animate({width: "0px"}, 500 );
      },
    );
});
$(document).ready(function() {
    $("#characterWrapper3").hover(
        function(){
            $("#arrow3").stop().animate({left: "525px"}, 500 );
        },
        function(){
            $("#arrow3").stop().animate({left: "200px"}, 500 );
        }
    );
});

//preload images and features
function preload(){
    mountain2 = loadImage("../resources/page2/Mountain2.png");
    sky = loadImage("../resources/Sky.png");
    dark = loadImage("../resources/IMG_0881.PNG");
}

//deploy canvas and setup
function setup(){
    
    let canvas = createCanvas(windowWidth, mountain2.height);
    image(sky,0,0);
    image(mountain2, 0, 0);
    image(dark,0,0);
    continuediv = createA('../html/searching.html', 'Continue...');
    continuediv.position(1300,3100);
    continuediv.style("font-size","70px");
    continuediv.style("font-family","Satisfy");
    continuediv.style("textDecoration", "none");
    continuediv.style("color","#8d9e09");
    makeNextText();
}
//function for making the scorlling text
function makeNextText(){
    var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
    nextText = true;
    var vara = new Vara("#characterIntro","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",[{
        text:"Before open borders were established in Europe in 1985, smuggling was a quick way for people familiar with the mountains to make some money.",
        y: 150,
        fromCurrentPosition: { y: false },
        duration: 10000,
        },
        {
            text:"Smugglers would typically trade untaxed Swiss goods, such as cigarettes, for food and other valubles.",
            y: 150,
            duration: 5000,
            fromCurrentPosition: { y: false },
            delay: 5000
        },
        {
            text:"Scroll to learn more about the smugglers",
            y: 150,
            duration: 5000,
            id: "no_erase",
            fromCurrentPosition: { y: false },
            delay: 5000
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
            vara.animationEnd(function(i, o) {
           if (i == "no_erase") erase = false;
           if (erase) {
             o.container.style.transition = "opacity 1s 4s";
             o.container.style.opacity = 0;
           }
        });
  
      });
}