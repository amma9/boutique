function findsum(a,d){ 
	
	return a+d;
}
console.log(findsum (1,2));

function findproduct(z,x){

	return z*x;
}
console.log (findproduct(3,4));

function threeOperation(x,operation){
var red = operation(3,x)
return red
}
console.log(threeOperation (3,findsum));
console.log (threeOperation (4,findsum));
console.log (threeOperation (5,findsum));
console.log (threeOperation (4,findproduct));
console.log (threeOperation (5,findproduct));

