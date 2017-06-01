// Lights



var grid = [];

for(step1 = 0; step1 < 1000; step1++) {
  var row = [];
  for(step2 = 0; step2 < 1000; step2++) {
    row.push(0);

  }
  grid.push(row);
}

// Part 2
// Each light has a brightness
// now lights should be an object and each co-ord should have a value of brightness. (like present drop) but an if statement to ensure reductions can go below 0 off = -1 on = +1 toggle +2
// and then lights[value].length

var changeLights = function (grid, x1, y1, x2, y2, direction) {
  // direction can be on off or toggle
  for(curY = y1; curY <= y2; curY++) {
    for(curX = x1; curX <= x2; curX++) {
      if(direction == 'off'){
        if(grid[curY][curX] != 0){
          grid[curY][curX] = grid[curY][curX] - 1;
        }
      }else if(direction == 'on') {
          grid[curY][curX] =  grid[curY][curX] + 1;
      }else if(direction == 'toggle') {
        grid[curY][curX] = grid[curY][curX] + 2;
      }
    }
  }
  return grid;
}


var parseCoords = function (coord) {
  var coord1 = coord.split(',');
  x = Number(coord1[0]);
  y = Number(coord1[1]);
  return {x: x, y: y}
};

var result = function (inst) {
  var lines = inst.split('\n');
  console.log(lines);
  console.log(lines[0]);
  lines.forEach(function(line){
    var pieces = line.split(' ');
    console.log(pieces);
    console.log(pieces[2]);

    if (pieces.length == 4) {
      direction = pieces[0];
      coord1 = parseCoords(pieces[1]);
      coord2 = parseCoords(pieces[3]);
    }
    else if(pieces.length == 5) {
      direction = pieces[1];
      console.log(direction);
      coord1 = parseCoords(pieces[2]);
      coord2 = parseCoords(pieces[4]);
    }
    grid = changeLights(grid, coord1.x, coord1.y, coord2.x, coord2.y, direction);
    // console.log(grid);
  });

  var count = 0
  grid.forEach(function (row){
    row.forEach(function (lights){
        count = count + lights;
    });
  });
  console.log(count);
  return count;
};

// justOne = `turn on 300,300 through 309,309
// turn on 0,0 through 9,9`
result(INSTRUCTIONS);
