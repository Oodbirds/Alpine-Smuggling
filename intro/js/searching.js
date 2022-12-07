let img;
let scrollPos = 0;
function preload() {
	img = loadImage('../resources/page3/BackgroundPlaceHolder.png');
    light = loadImage("../resources/page3/FlashyLight.png")
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
        vara.get("page2").container.style.cursor = "pointer";
        vara.get("page2").container.onclick = function() {
          document.querySelector("#page2").click();
        };
      });
    console.log("making text");
}

function setup() {
	createCanvas(window.screen.width, window.screen.height);
    image(img,0,0);
    makeNextText();
    //imgage(img,0,0);

}
function mouseMoved(){
    if (mouseX == 0 && mouseY == 0){
        console.log("located");
        
        makeNextText();
    }
}
function draw() {
    image(img, 0, 0);
    image(light, mouseX - 1920, mouseY - 1080);
	// let rad = 90;
	// img.loadPixels();
	// for (let y = 0; y < height; y++) {
	// 	for (let x = 0; x < width; x++) {
	// 		let pos = (x + y * width) * 4;
	// 		let r = img.pixels[pos];
	// 		let g = img.pixels[pos + 1];
	// 		let b = img.pixels[pos + 2];

	// 		let d = dist(x, y, mouseX, mouseY);


	// 		let adjustBrightness = map(d, 0, rad, 1, 0);
	// 		r *= adjustBrightness;
	// 		g *= adjustBrightness;
	// 		b *= adjustBrightness;


	// 		r = constrain(r, 0, 255);
	// 		g = constrain(g, 0, 255);
	// 		b = constrain(b, 0, 255);


	// 		pixels[pos] = r;
	// 		pixels[pos + 1] = g;
	// 		pixels[pos + 2] = b;
	// 		pixels[pos + 3] = 255;
	// 	}
	// }

	// updatePixels();
}
function mouseWheel(event) {
    console.log("scroll" + scrollPos);

    scrollPos += event.delta;
    //console.log(scrollPos);
    if (scrollPos >= 3500) {
        lightsOn = true;
        tintVal = -150;
        scrollPos = 3500;
            print("texting texting");
            makeNextText();      
    }
    else if (scrollPos <= 0) {
      scrollPos = 0;

      //makeNextText();
    }
    else{
        print("changeTint");
        //changeTint(scrollPos, event.delta);
        
    }
   // moveText(myPTag);
    return false;

}