class iron{
	constructor(x,y,r)
	{
		var options = {
			'density':30,
			'friction': 3,
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