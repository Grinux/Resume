
<script>

function getRelationship(x, y) {
    // Your code goes here!

    if (!isNaN(x) && !isNaN(y) ) {
    	if (x < y) return "<";
    	if (x > y) return ">";
    	 else return "=";
    }; 
     if (typeof(x) == "undefined" && typeof(y) == "undefined") {

        return "Can\'t compare relationships because " + x + " and " + y + " are not numbers.";
    } 
    if (typeof(x) == "string" && !isNaN(y)){ 

    	return "Can\'t compare relationships because " + x + " is not a number.";
    };	
         
    if (!isNaN(x) && typeof(y) == "string") {
    	
    	return "Can\'t compare relationships because " + y + " is not a number.";
    };

    if (typeof(x) == "undefined" && !isNaN(y)) {
    	
    	return "Can\'t compare relationships because " + x + "is not a number.";
    }; 

    if (!isNaN(x) && typeof(y) == "undefined") {
    	
    	return "Can\'t compare relationships because " + y + " is not a number.";
    };

    if (typeof(x) == "string" && typeof(y) == "string") {
    	
    	return "Can\'t compare relationships because " + x + " and " + y + " are not numbers.";
    
    };
    if (typeof(x) == "string" && typeof(y) == "undefined") {
    	
    	return "Can\'t compare relationships because " + x + " and " + y + " are not numbers.";
    
    };  

    if (typeof(x) == "undefined" && typeof(y) == "string") {
    	
    	return "0Can\'t compare relationships because " + x + " and " + y + " are not numbers.";
    
    }; 

    if (!isNaN(x) && isNaN(parseFloat(y))) {
    	
    	return "1Can\'t compare relationships because " + y + " is not a number.";

    }; 
    
    if (isNaN(parseFloat(x)) && typeof(y) == "string") {
    	
    	return "2Can\'t compare relationships because " + x + " and  " + y + " are not numbers.";
    }; 
    if (typeof(x) == "string" && isNaN(parseFloat(y))) {
    	
    	return "3Can\'t compare relationships because  " + x +  " and " + y + " are not numbers.";
    };
    if (isNaN(parseFloat(x)) && typeof(y) == "undefined") {
    	
    	return "4Can\'t compare relationships because " + x + " and " + y + " are not numbers.";
    }; 
    if (typeof(x) == "undefined" && isNaN(parseFloat(y))){
    	
    	return "Can\'t compare relationships because " + x + " and " + y + " are not numbers.";
    };
   
}

// Try logging these functions to test your code!
console.log(getRelationship(5,1));
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship(NaN,"that"));
console.log(getRelationship("this",undefined));
console.log(getRelationship(3,NaN));
console.log(getRelationship("hi"));
console.log(getRelationship("hola",NaN));
console.log(getRelationship(NaN,undefined));
</script>