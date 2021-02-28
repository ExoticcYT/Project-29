class Hexa
{
	constructor(x,y,radius)
	{
		var options={
			//isStatic:false,
			restitution:0.3,
			friction:1,
			density:0.45

			
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.image=loadImage("hexa.png");
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}