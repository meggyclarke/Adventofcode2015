// Lights

var grid = [];
var step1result = [];
var direction = false

for(step1 = 0; step1 < 5; step1++) {
  var row = [];
  for(step2 = 0; step2 < 5; step2++) {
    row.push(false);

  }
  grid.push(row);
   step1result = grid;
}

console.log(grid);
console.log(step1result);

var visual = function(grid) { //full away
  var string = '';

  grid.forEach(function(row) {
    var r = ''
    row.forEach(function (light) {
      if(light == false) {
        r = r + "  ";
      } else {
        r = r + "X ";
      }
    })
    string = string + r + '\n';
  });
  return string;
};

// var turnOn = function(grid, x1, y1, x2, y2) {
//   for(curY = y1; curY <= y2; curY++) {
//     for(curX = x1; curX <= x2; curX++){
//       grid[curY][curX] = 't';
//     }
//   }
//   console.log(grid);
//   return grid;
// }

var changeLights = function (grid, x1, y1, x2, y2, direction) {
  // direction can be on off or toggle
  for(curY = y1; curY <= y2; curY++) {
    for(curX = x1; curX <= x2; curX++) {
      if(direction == 'off'){
        grid[curY][curX] = false;
      }else if(direction == 'on') {
          grid[curY][curX] = true;
      }else if(direction == 'toggle') {
        grid[curY][curX] = !grid[curY][curX];
      }
    }
  }
  console.log(grid);
  return grid;
}

console.log(visual(grid));

grid = changeLights(grid, 2, 2, 4, 4, 'on');
grid = changeLights(grid, 4, 4, 2, 2, 'off');
grid = changeLights(grid, 3, 3, 5, 1, 'toggle');

console.log(visual(grid));
