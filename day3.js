// Houses
houses = {
  //house // present
  "0,0": 1
};


curX = 0; //starting point
curY = 0; //starting point
                  //('v^^>')
var moving = function(inst) {
  var moves = Array.from(inst); // ['v', '^', '^', '>']
  console.log(moves);
  moves.forEach(function(move){
    if(move === 'v') {
      curY = curY - 1;
    }else if(move === '<') {
      curX = curX - 1;
    }else if(move === '>') {
      curX = curX + 1;
    }else if(move === '^') {
      curY = curY + 1;
    }
    presDrop(curX, curY);
  });
  // console.log(houses);
  // console.log(curX, curY);

  console.log(Object.keys(houses).length);

};

var presDrop = function(x, y){
  var curLoc = x.toString() + ',' + y.toString();
  if(houses[curLoc]){
    houses[curLoc] = houses[curLoc] + 1;
  }else{
    houses[curLoc] = 1;
  }
  console.log(curLoc);
};

moving(INSTRUCTIONS);
