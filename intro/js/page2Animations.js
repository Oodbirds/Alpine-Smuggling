let mountain2;
let sky;

function preload(){
    mountain2 = loadImage("../resources/page2/mountain2.png");
    sky = loadImage("../resources/Sky.png");
}
function setup(){
    let canvas = createCanvas(windowWidth, mountain2.height);
    image(sky,0,0);
    image(mountain2, 0, 0);

}
