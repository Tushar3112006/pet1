//Create variables here
var dog ,dogImg,happydogImg,databas,foods,foodStock;
function preload()
{
	//load images here
  dogImg = loadImage(images/dogImg.png)
  happydogImg  =  loadImage(images/dogImg1.png)


}

function setup() {
	createCanvas(500, 500);
  databas = firebase,databas();
  foodStock = on("value,,readstock")
  foodStock = set(20);

  dog = createSprities(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;

}


function draw() {  
background("green")

if(foods!===undefined){
  text(20);
  fill(255);


  if(keywentdown(up_arrow)){
    writestrok(foods);
    dog.addImage(happydogImg);

  }
  
  if(keywentup(up_arrow)){
    dog.addImage(dogImg)

  }

  if(foods===0){

    foods=20;
  }



}
  drawSprites();
  //add styles here

}



