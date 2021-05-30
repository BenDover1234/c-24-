class stone{
	constructor(x,y,r)
	{
		var options = {
			'density':12,
			'friction': 0.9,
			'restitution':0.8
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
			

			pop()
	}

}