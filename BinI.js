class Bin2
{
  constructor(x,y,height)
  {
      var opt = {
          isStatic:true
      }
    this.body=Bodies.rectangle(x,y,190,height,opt) 
    this.height = height;
    this.image = loadImage("bin.png")
    World.add(world,this.body)
  }
  display()
  {
      imageMode(CENTER);
      fill(255)
      image(this.image, 675,630, 190, this.height);
  }
}