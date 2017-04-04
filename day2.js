//Wrapping Paper


// formula 2*l*w + 2*w*h + 2*h*l plus extra of smallest side

//example 1


let l = 0
let w = 0
let h = 0

elfProbs = function(l, w, h){

  calc1 = 2*l*w;
  calc2 = 2*w*h;
  calc3 = 2*h*l;

  preliminary = [calc1, calc2, calc3];
  smallest = [l, w, h].sort.first;
  wrapping = preliminary.push(smallest);

  wraptotal = 0;
  solution = wrapping.forEach(side) {
    wraptotal += side;
  }
  console.log(wraptotal);
  return wraptotal;

};

expect(elfProbs(2, 3, 4).toBe(58);
