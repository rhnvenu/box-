var b1,b2
function setup() 
{
  createCanvas(400, 400);
b1=new Box(200,300,10,47)
b2=new Box(219,398,39,67)


}

function draw() 
{
  background(220);
b1.show()
  b2.show()
b1.speed(12)
b2.speed(5)
}

