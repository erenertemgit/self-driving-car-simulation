const canvas=document.getElementById("myCanvas");
//canvas.height=window.innerHeight;
canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50); //x, y, weight, height
car.draw(ctx);

animate();

function animate(){
  car.update();
  canvas.height=window.innerHeight; //changed location for responsive road and car movement
  car.draw(ctx);
  requestAnimationFrame(animate);
}