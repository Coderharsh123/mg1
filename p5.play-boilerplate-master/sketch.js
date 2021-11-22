var canvas,bg;

var form;

function preload(){
  bg=loadImage("bg.png");
}



function setup() {
  createCanvas(2700,1500);
  //var bk=createSprite(1400, 750, 2500,3000);
  //bk.addImage(bg); 
  //bk.scale=2.2;
  
form=new Form(1350,750);

}

function draw() {
  background(bg);  

  form.display;


  drawSprites();
}