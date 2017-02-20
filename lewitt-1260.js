function setup() { 
  createCanvas(400, 400);
	
  background(0);
	noFill(0);
	rectMode(CENTER);
	strokeCap(ROUND);
	strokeWeight(12);
		

	blur();
	
	function blur(){
	stroke(255);
	noFill();
	
rect(200, 200, 180, 180,15);
	filter(BLUR,15);
	}
	
	strokeWeight(0);
	fill(255);
	rect(200, 200, 125, 125,10);
	noFill();
	strokeWeight(10);
	for(var i=250;i<600;i+=3){
		rect(200,200,i,i,40)
	}	
} 
