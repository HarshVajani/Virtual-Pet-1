//Create variables here
var dog;
var happyDog;
var foodS;
var foodStock, database;

function preload()
{
  //load images here
  dog=loadImage("sprites/dogImg.png");
  happyDog=loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);

  }

  drawSprites();
  //add styles here

}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



