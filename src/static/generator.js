import meats from '/meats.js';
import preMain from '/preMain.js';
import postMain from '/postMain.js';
import preVeg from '/preVeg.js';
import postVeg from '/postVeg.js';
import flavours from '/flavours.js';
import fruit from '/fruit.js';
import veg from '/veg.js';
import sauces from '/sauces.js';
import nuts from '/nuts.js';

const mainOptions = [meats, veg];

export function generateMain() {
  // choose a method
  // adj + main + veg [2-3] + flavour [+ sauce]
  // main + noun + veg [2-3] + flavour [+ sauce]
  // adj + veg + veg + flavour
  // flavour or nuts
  // veg or fruit
  // 1
  return `${getRandom(preMain)} ${getRandom(
    getRandom(mainOptions)
  )}, ${getRandom(veg)}, ${getRandom(veg)} ${getRandom(postVeg)}, ${getRandom(
    flavours
  )} ${getRandom(sauces)}`;
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(generateMain());
