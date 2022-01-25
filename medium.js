//Write a function that would allow you to do this:

//var sharePizza = cutPizzaSlices(8);

//console.log(sharePizza(2));                                                                                                                                                                    

  // prints "Each person gets 4.00 slices of pizza"

//console.log(sharePizza(3)); 

  // prints "Each person gets 2.67

var sharePizza = function pcutPizzaSlices(x,y=8){ 
  // here one argument pass from caller and one is by default (y=8)
  
 return 'Each person gets '+(y/x).toFixed(2)+' slices of pizza';
// this expression calculation for desired result, toFixed(2) method is used for get the valu till two decimal point
}
console.log(sharePizza(2)); // printing result returned by function expression
console.log(sharePizza(3));
