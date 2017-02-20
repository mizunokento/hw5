function setup() { 
  createCanvas(400, 400);
	
  background(0);
	noFill(0);
	strokeWeight(8);
	stroke(255);
	
	for(var i=10;i<600;i+=100){
	ellipse(200,200,i,i);	
	}
	filter(BLUR,10);
	
	for(var b=10;b<600;b+=100){
	ellipse(200,200,b,b);	
	}
	filter(BLUR,10);

} 
