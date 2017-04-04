var directions = '';


var getFloor = function(directions) {
  newdir = Array.from(directions);

  currentFloor = 0;
  
  var updateFloor = newdir.forEach(function(step) {
    if(step == "(") {
      currentFloor += 1;
    }else if (step == ")") {
      currentFloor -= 1;
    }
  });
  console.log(currentFloor);
  return currentFloor;
};

expect(getFloor('(())')).toBe(0);
expect(getFloor('()()')).toBe(0);
expect(getFloor('(((')).toBe(3);
expect(getFloor('(()(()(')).toBe(3);
expect(getFloor('))(((((')).toBe(3);
expect(getFloor('())')).toBe(-1);
expect(getFloor('))(')).toBe(-1);
expect(getFloor(')))')).toBe(-3);
expect(getFloor(')())())')).toBe(-3);
