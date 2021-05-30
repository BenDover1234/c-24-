class Rubber{
	constructor(x,y,r)
	{
		var options = {
			'density':1,
			'friction': 5,
			'restitution':0.3
		  };

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			elipse(0, 0, this.r, this.r);

			pop()
	}

}