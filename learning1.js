//Santa Apartment floors

// var directions = '(())';
//
//  newdir = Array.from(directions);
// console.log(newdir)

// newdir.math(){
//   var floor = newdir.forEach(function(step) {
//     if(step == "(") {
//       floorValue = +1
//     }else if (step == ")") {
//       floorValue = -1
//     }
//   }
//   console.log(floorValue)
// }



var cat = 'cat';

cat += 's';

cat = cat + 's';

myVar = "5";
myVar = parseInt(myVar);

myObj = {name: 'Sam'};

myObj.friends = ['mel', 'Ian'];

myEmberObj.set('friends', ['mel', 'ian']);

myObj.friends.push('Dave');

allFriends = ['mel', 'ian'];

myObj.friends = allFriends;

allFriends.push('Dave');
myEmberObj.set('friends', allFriends);

age = 10;

myObj.age = age;

age = 11;

person = {
  name: "Mel",
  age: 10,
  prefix: "Like ...",
  sayHi: function() {
    return this.saySomething('hello');
  },
  saySomething: function(a){
    return this.prefix + a;
  }
  addMyAge: function(a) {
    return this.age + a;
  },

  addMyAge(a){
    return this.age + a;
  }
}
addNums = function(a, b) {
  return a + b;
}

addNums(1, 2);
results = 3;

person.add = function(a, b) {
  return a + b;
}
person.add = addNums;

person.age = addNums(3,5);

calculatorFactory = function(a) {
  calculator = function(b) {
    return a + b;
  }
  return calculator;
}
TwoAdder = calculatorFactory(2);

TwoAdder = function(b){
  return 2 + b;
}

TwoAdder(5);


person = {
  sayHi(){
    return 'hi'
  }
  sayHi: function(){
    return 'hi'
  }
}
person.sayHi = function(){
  return 'hi';
}
