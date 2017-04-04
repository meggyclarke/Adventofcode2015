//Wrapping Paper

calcPaper = (function(l, w, h) {

  var calc1 = (2 * l * w);    // 2*2*3 = 12
  var calc2 = 2*w*h;      // 2*3*4  = 24
  var calc3 = 2*h*l;      // 2*4*2 = 16
  // console.log(calc1);

  var preliminary = [calc1, calc2, calc3];
    // console.log(preliminary);
  var smallest = Math.min(calc1/2, calc2/2, calc3/2);
    // console.log(smallest);

  wraptotal = 0;
  preliminary.push(smallest);
  preliminary.forEach(function(side){
      wraptotal += side;
  });
  // console.log(wraptotal);
  return wraptotal;
});

calcRibbon = function(w, h, l){
  var side1 = 2*w;
  var side2 = 2*h;
  var side3 = 2*l;

  largest = Math.max(side1, side2, side3);
  var firstRib = [side1, side2, side3];
  firstRib.(largest);
  console.log(firstRib);
  // var firstRibNum = firstRib.map(Number);
  var secondRib = w*h*l; //BOW
  // var secondRibNum = secondRib.map(Number);
  firstRib.push(secondRib); //[12,3,4,]
  var ribbonLength = 0;

  var ribbonLoop = firstRib.forEach(function(portion){
    ribbonLength = ribbonLength + portion;
  });
  console.log(ribbonLength);
  return ribbonLength
};

function wrappingPaper() {
  var boxes = allBoxes.split('\n');
  console.log(boxes);
  var totalPaper = 0;
  var totalRibbon = 0;

  boxes.forEach(function(boxDimensions){
    var boxPaper = boxDimensions.split('x');
    console.log(boxPaper); // ["6", "3", "9"]
    var paperNumbers=boxPaper.map(Number);
    console.log(paperNumbers);
    // return paperNumbers // [6, 3, 9]
    var box = calcPaper(paperNumbers[0], paperNumbers[1], paperNumbers[2]);
    console.log(box);
    totalPaper = totalPaper + box;
    var ribbon = calcRibbon(paperNumbers[0], paperNumbers[1], paperNumbers[2]);
    totalRibbon = totalRibbon + ribbon;

  });
  console.log(totalPaper);
  return {
    paper: totalPaper,
    ribbon: totalRibbon
  };
}
result = wrappingPaper();
console.log(result.paper);
console.log(result.ribbon);


addTwoNums = function(a, b){
  return a + b;
}




// expect(calcPaper(2, 3, 4)).toBe(58);
