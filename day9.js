//cities distance


var original = function(string) {
  var line = string.split('\n'); //array of arrays
    var item = line.split(' ');
    var num = Number(item[4]);

}


//loop through each line add each word into an array (need to subtract "to"?)
//maybe only item[0] and item[2] // array of cities

// then loop through the full answer and create a new array that has each of the 8 cities
// in a new order. i think by taking the front off and adding to the back,
// or poping off back and adding to front? this pop action will need to happen
// 7 times for each of the 8 cities. 1st interation [a,b,c,d,e,f,g,h] [b,c,d,e,f,g,h,a]
// second interation [a,b,c,d,e,f,g][a,b,d,e,f,g,c]
//
// then loop through each of those combnation set with an x, y argument
// find both cities in the original string and return the value for them into a new variable
// then add all the numbers to give you the total distance of that combination set
// put that variable into an array
//
// then you have an array of total distance cobinations to call Math.min on
// and thats the final solution.
//
