// var allBoxes = epic string  l w h
// allBoxes = `2x3x4\n6x6x6\n9x9x9`
const findWrap = function (string) {
    const lines = string.split('\n'); // creates array of strings
    let wrap = 0;
    let ribbon = 0;
    lines.forEach(function (line) {
      const [l, w, h] = line.split('x');
      let surface = [2 * (l * w), 2 * (w * h), 2 * (h * l)];
      const spare = Math.min(l * w, w * h, h * l);
      surface = surface[0] + surface[1] + surface[2] + spare; //evaluates right then assigns to left
      wrap = wrap + surface;

      const ribArray = [l, w, h].map((Number)=> {
        return Number * 2
      })
      let largest = Math.max(...ribArray);
      let ribOne = ribArray.reduce(function(acc, val){
        return acc + val;
      })- largest;

      let secondRib = w*h*l; //BOW 2*3*4 = 24
      let ribbonLength = ribOne + secondRib; // 10+24 = 34
      ribbon = ribbon + ribbonLength;
    });
    return {wrap: wrap, ribbon: ribbon}
};
console.log(findWrap(allBoxes));
