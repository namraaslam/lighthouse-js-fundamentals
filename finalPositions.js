
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
  let coords = [0,0];

  for (let move of moves) {
    if (move == 'north') {
      coords[1]++
    } else if (move == 'south') {
      coords[1]--;
    } else if (move == 'east') {
      coords[0]++;
    } else if (move == 'west') {
      coords[0]--;
    }
  }
  return coords;
}

console.log(finalPosition(moves));