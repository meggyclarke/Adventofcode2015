// Houses
houses = {
  //house // present
  "0,0": 2
};
// var robo = []; //2493 (this is when he didnt start at 0)
// var santa = []; // 1494

// curX = 0; //starting point
// curY = 0; //starting point
                  //('v^^>')
// (var dropping = function(inst) {  this function works but is being refractored
//   var drops = Array.from(inst); // ['v', '^', '^', '>']
//   // console.log(drops);
//         for (var step = 0; step < inst.length; step+=2) {
//           santa.push(drops[step]);
//         };
//       moving(santa); //calling moving function on array of evens
//         for (var bit = 1; bit < inst.length; bit+=2) {
//           robo.push(drops[bit]);
//         }; // end of for
//       moving(robo);  //calling moving function on array of odds
//
//   // console.log(houses);
//   // console.log(curX, curY);
//     // console.log(robo);
//     debugger;
//
//
//   console.log(Object.keys(houses).length); // if all else fails this should be 1 the start 0,0
// };)

var presDrop = function(x, y){
  var curLoc = x.toString() + ',' + y.toString();
  if(houses[curLoc]){
    houses[curLoc] = houses[curLoc] + 1;
  }else{
    houses[curLoc] = 1;
  }
  // console.log(curLoc);
};

// Below function works but is being refractored
// (var moving = function(moves){ // takes array
//   curX = 0; //starting point
//   curY = 0; //starting point
//   moves.forEach(function (move){
//     if(move === 'v') {
//       curY = curY - 1;
//     } else if(move === '<') {
//       curX = curX - 1;
//     }else if(move === '>') {
//       curX = curX + 1;
//     }else if(move === '^') {
//       curY = curY + 1;
//     }
//     presDrop(curX, curY);
//   });
//  console.log(Object.keys(houses).length);
// };)

//dropping(INSTRUCTIONS);

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
  console.log(Object.keys(houses).length);
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





// ****** vvvv  Therories/ Workouts did not work vvv *************
// var jointDrop = function(inst) {
//   movingRobo(inst);
//   movingSanta(inst);
//   console.log(Object.keys(houses).length);  //9055 is too high  4528 (removing present drop from up or down still too high)
// }  2673 still too high

// var numbs = indexOf(move, numbs) function() {
//   var santa = [];  //odds (santa starts)
//   var robo = []; // evens
//   var SantaOrRobo = function Sort(numbs) {
//     debugger;
    // var robo = [];
    // var santa = [];
    // for (var step = 0; step < numbs.length; step+=2) {
    //   // if(move[step] % 2) { // if true maud results in the leftovers
    //     santa.push(move);
    //   }
    //   // }else {  //if false can't be divided by 2
    //   //   robo.push(move);
    //   // } //end of else
    // console.log(robo);
    // console.log(santa);
//     }; // end of for
//   };// end of SantaOrRobo
// }); // end of numbs
// var roboResult = moving(robo);
// var santaResult = moving(santa);

// jointDrop(INSTRUCTIONS);
