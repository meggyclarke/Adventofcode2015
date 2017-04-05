//Wrapping Paper

calcPaper = (function(l, w, h) {
  var calc1 = (2 * l * w);    // 2*2*3 = 12
  var calc2 = 2*w*h;      // 2*3*4  = 24
  var calc3 = 2*h*l;      // 2*4*2 = 16
  var smallest = Math.min(calc1/2, calc2/2, calc3/2);
  var wraptotal = calc1 + calc2 + calc3 + smallest;
  return wraptotal;
});

calcRibbon = function(w, h, l){
  var side1 = 2*w;
  var side2 = 2*h;
  var side3 = 2*l;

  var largest = Math.max(side1, side2, side3);
  var ribOne = ((side1 + side2 + side3)-largest) + ((side1 + side2 + side3)-largest)
//            ((2   +   3   +  4) = 9 -4 )= 5 + ((2   +   3   +  4) = 9 -4 )= 5
//                                          = 10
  var secondRib = w*h*l; //BOW

  var ribbonLength = ribOne + secondRib;

  console.log(ribbonLength);
  return ribbonLength
};

parseDimensions = function(dimension){
  // put the logic to turn '2x3x4' into [2, 3, 4] right here
  var boxes = allBoxes.split('\n');
  var boxPaper = boxDimensions.split('x');
  console.log(boxPaper); // ["6", "3", "9"]
  var paperNumbers=boxPaper.map(Number);
  console.log(paperNumbers);
  return paperNumbers // [6, 3, 9] length, width, height
}

function wrappingPaper() {
  var totalPaper = 0;
  var totalRibbon = 0;

  parseDimensions.forEach(function(present) {
    l = present[0];
    h = present[1];
    w = present[2];
    var box = calcPaper(l, h, w);
    console.log(box);
    totalPaper = totalPaper + box;
    var ribbon = calcRibbon(l, h, w);
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






// expect(calcPaper(2, 3, 4)).toBe(58);
