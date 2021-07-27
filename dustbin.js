class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=254;
		this.dustbinHeight=200;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
		this.image = loadImage("dustBin.png");
		World.add(world, this.bottomBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
			pop()
			
	}

}