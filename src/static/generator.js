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

function getSupplementaryOption(category) {
  return (
    getRandomThingOrNot(preVeg, false) +
    getRandom(category) +
    getRandomThingOrNot(postVeg, true)
  );
}

function getRandomSupplementaryOption() {
  const options = [
    getSupplementaryOption(veg),
    getSupplementaryOption(nuts),
    getSupplementaryOption(fruit),
  ];
  return getRandom(options);
}

function getRandomThingOrNot(array, spaceBefore) {
  const thing = spaceBefore ? ` ${getRandom(array)}` : `${getRandom(array)} `;
  return getRandom([thing, '']);
}

function getFinishingTouch() {
  const randomSauceOrNot = getRandom([` ${getRandom(sauces)}`, '']);
  return getRandom([
    `${getRandom(flavours)}${randomSauceOrNot}`,
    `${getRandom(fruit)}${randomSauceOrNot}`,
    `${getRandom(veg)}${randomSauceOrNot}`,
  ]);
}

export function generateMain() {
  const firstOption =
    getRandomThingOrNot(preMain, false) +
    getRandom(getRandom(mainOptions)) +
    getRandomThingOrNot(postMain, true);

  return `${firstOption}, ${getSupplementaryOption(
    veg
  )}, ${getRandomSupplementaryOption()}, ${getFinishingTouch()}`;
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(toSentenceCase(generateMain()));

function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
