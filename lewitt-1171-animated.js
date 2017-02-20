function setup() { 
  createCanvas(600, 600);
} 

var dotx = 300;
var doty=300;
var diagx=525;
var diagy=100;
var inversex=1;
var inversey=1;
var delta=1; 
var zx=125;
var zy=150;
var deltazy=.25;
var deltazx=.375;
var deltaz=-1;

function draw() { 
  background(255);
	rectMode(CORNER);
	
	leftSquare();
	
	function leftSquare()
	{
	  fill(100);
	  strokeWeight(0);
	  rect(50,150,150,150);
	  fill(225);
	  quad(50,150,125,100,275,100,200,150);
	  fill(75);
	  quad(200,150,275,100,275,250,200,300);
	  
	  
	  X();
	      function X(){
	        fill(75);
	        quad(125,150,162.5,125,162.5,200,125,225);
	      }
	  
	  Y();
	  function Y(){
	  fill(225);
	  quad(125,225,200,225,237.5,200,162.5,200);
	  }
	  
	  Z();
	  function Z(){
	    fill(75);
	    rect(zx,zy,112.5,75);
	    fill(100);
	    rect(zx,zy,75,75);
	    fill(225);
	    rect(zx,zy,75,-25);
	    
	  }
	      zy-=deltazy;
	      zx+=deltazx;
	      if(zy<=125){
	        deltazx=deltazx*deltaz;
	        deltazy=deltazy*deltaz;
	      }
	      if(zy>=150){
	        deltazx=deltazx*deltaz;
	        deltazy=deltazy*deltaz;
	      }
	}

	rightSquare();
	
	function rightSquare(){
	fill(100);
	strokeWeight(0);
	rect(300,150,150,150);
	fill(225);
	quad(300,150,375,100,525,100,450,150);
	fill(75);
	quad(450,300,450,150,525,100,525,250);
	
	tri();
	
	function tri(){
		fill(200);
		triangle(dotx,150,450,doty,diagx,diagy);
		if(dotx>450){inversex-=2;}
		if(dotx<300){inversex+=2;}
		if(diagx<450){delta=-(delta);}
		if(diagx>525){delta=-(delta);}
		dotx=dotx+inversex;
		doty=doty-inversex;
		diagx-=.5*delta;
		diagy+=(.3333333333333)*delta;
	}
	}
	
}
