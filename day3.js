findTotal = function(INSTRUCTIONS) {
  let x = 0;
  let y = 0;

  let coOrd = {
    'v' : function() {
      y -= 1;
    },
    '^' : function() {
      y += 1;
    },
    '>' : function() {
      x += 1;
    },
    '<' : function() {
      x -= 1;
    },
  };

  const parts = INSTRUCTIONS.split('');
  const newArray = parts.map(function (part) {
    coOrd[part]();
      return x + "," + y;
    });

    const houses = [];
    newArray.forEach(function(house) {
      if(!houses.includes(house)){
        houses.push(house);
      }
    });
    console.log(houses.length);
  }

findTotal(INSTRUCTIONS);

////Part 2

houses = {
  //house // present
  "0,0": 2
};

var presDrop = function(x, y){
  var curLoc = x.toString() + ',' + y.toString();
  if(houses[curLoc]){
    houses[curLoc] = houses[curLoc] + 1;
  }else{
    houses[curLoc] = 1;
  }
};

// ******Refractoring for Improvement *************

santa = {
  x: 0,
  y: 0
};
robot = {
  x: 0,
  y: 0
};

var followInstruction = function ( actor, inst) {
  if(inst === 'v') {
    actor.y = actor.y - 1;
  } else if(inst === '<') {
   actor.x = actor.x - 1;
  }else if(inst === '>') {
   actor.x = actor.x + 1;
  }else if(inst === '^') {
   actor.y = actor.y + 1;
  }
  presDrop(actor.x, actor.y);
};

var result = function(inst) {
  var houseMove = Array.from(inst); // ['v', '^', '^', '>']
  houseMove.forEach(function(inst, index) {
    if(index % 2 == 0) {
      followInstruction(santa, inst);
    }else{
      followInstruction(robot, inst);
    }
  });
};

result(INSTRUCTIONS);
console.log(Object.keys(houses).length);
