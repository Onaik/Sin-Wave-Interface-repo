let myfont
let aSlider
let bSlider
let amountSlider
let rotateXslider
let rotateYslider
let rotateZslider
let edgeSlider
let Zslider
let rotateSpeedSlider
let strokeWeightSlider
let sizeSlider
let sizeXslider
let rotatebutton
//let tanbutton
let rotating = false;

function preload() {
  myfont = loadFont('assets/Alcubierre.otf');
}

function setup() {
  

  createCanvas(3000, 1280, WEBGL);

  textSize(100)
  fill("white")
 loadFont(myfont)
  text('scale', 100, 50)
 
  angleMode(DEGREES)
 
  //buttons
  //tanbutton = createButton ("switch mode")
 //tanbutton.mousePressed(togglemode)
rotatebutton = createButton("animate")
rotatebutton.mousePressed(togglerotation)

//sliders
aSlider = createSlider(0, 200, 100, 1)
aSlider.position (2300, 100)
bSlider = createSlider(0, 360, 200, 1)
bSlider.position (2300,200)

amountSlider = createSlider(0, 300, 200, 1)
amountSlider.position (2300,300)
rotateXslider = createSlider(0, 720, 60, 1)
rotateXslider.position (2300, 400)
rotateYslider = createSlider(0,720,60,1)
rotateYslider.position (2300, 500)
sizeSlider = createSlider(30,1100,300,1)
sizeSlider.position (2300,1000)
sizeXslider = createSlider (30,1100,300,1)
sizeXslider.position (2300,1100)
//rotateZslider = createSlider(0,300,60,1)
//rotateZslider.position (2200,600)
edgeSlider =createSlider(20,359,90,1)
edgeSlider.position (2300, 700)
Zslider = createSlider(1, 1400, 200,1)
Zslider.position (2300,800)

rotateSpeedSlider = createSlider(.1,5,2, .1)
rotateSpeedSlider.position(2300,600)

strokeWeightSlider = createSlider(1,30,1,1)
strokeWeightSlider.position(2300,900)
}

 

function togglerotation() {
  rotating = !rotating
}

function draw() {
  background(25);


 fill ("Goldenrod")
 noStroke()
rect (700, -800,1100,2000)
fill (100,200,220)
rect (700,-800,10,2000)
fill(12,23,81)
rect (700,-800,8,2000)
fill(32,130,23)
rect (700,-800,6,2000)

fill(255,153,0)
rect(750,-800,200,100)

fill(200,220,180)
rect(970,-800,20,1300)

fill(235,230,90)
rect(990,-800,20,1580)

fill(255,180,90)
rect(980,-800,20,1400)


 rotateX(rotateXslider.value())
 rotateY(rotateYslider.value())
 
 noFill()
 stroke(255)
 strokeWeight (strokeWeightSlider.value())

 if (rotating == true) {
  rotate(frameCount/ rotateSpeedSlider.value());
  }

 for (var i = 0; i < amountSlider.value(); i++) {
 
  var r = map(sin(frameCount / 2), -1, 10, bSlider.value(), aSlider.value())
  var g = map (i,0,bSlider.value(),bSlider.value(),aSlider.value())
  var b = map(cos(frameCount), -1, 1, bSlider.value(), aSlider.value())
 
  stroke(r, g, b)
 
  //rotate(frameCount/ rotateSpeedSlider.value()) //trying to have a button control this rotation
  

 beginShape()
 
for (var j = 0; j < 360; j += edgeSlider.value()) {
  var rad = map(sin(i * 5), -1,1, sizeXslider.value(), sizeSlider.value())
  var x = rad * cos(j)
  var y = rad * sin(j)
  var z = sin(frameCount * 2 + i *30) * Zslider.value()
 
  vertex(x, y, z)
 
}
endShape(CLOSE)
}
}
 
 
