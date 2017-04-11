//Wrapping Paper

var calcPaper = (function(l, w, h) {
  var calc1 = (2 * l * w);    // 2*2*3 = 12
  var calc2 = 2*w*h;      // 2*3*4  = 24
  var calc3 = 2*h*l;      // 2*4*2 = 16
  var smallest = Math.min(calc1/2, calc2/2, calc3/2);
  var wraptotal = calc1 + calc2 + calc3 + smallest;
  return wraptotal;
});

var calcRibbon = function(w, h, l){
  var side1 = 2*w;
  var side2 = 2*h;
  var side3 = 2*l;

  var largest = Math.max(side1, side2, side3);
  var ribOne = ((side1 + side2 + side3)-largest)

  var secondRib = w*h*l; //BOW 2*3*4 = 24

  var ribbonLength = ribOne + secondRib; // 10+24 = 34

  console.log(ribbonLength);
  return ribbonLength
};

var parseDimensions = function(dimension){
  // put the logic to turn '2x3x4' into [2, 3, 4] right here
  var boxCoords = [];
  var lines = allBoxes.split('\n');
  console.log(lines);
  console.log(lines[0]); // 29x13x26
  lines.forEach(function(line){
    var box = line.split(',');
    console.log(box); // ['29x13x26']
    box.forEach(function(side){
      var boxDimensions = side.split('x');
      console.log(boxDimensions); // ["6", "3", "9"]
      console.log(boxDimensions[2]); // 26
      var paperNumbers=boxDimensions.map(Number);
      console.log(paperNumbers); [10, 9, 8]
      boxCoords.push(paperNumbers);

    //  need a new giant array i can put all my little number arrays into
    });
  });
  return boxCoords;
}

var wrappingPaper = function(instructions) {
  var totalPaper = 0;
  var totalRibbon = 0;
  var boxSize = parseDimensions(instructions);

  boxSize.forEach(function(present) {
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
result = wrappingPaper(allBoxes);
console.log(result.paper); //1,586,300 is right
console.log(result.ribbon); // 3737498






// expect(calcPaper(2, 3, 4)).toBe(58);
