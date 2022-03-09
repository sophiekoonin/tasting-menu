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
import dessert from '/dessert.js';
import dessertFlavours from '/dessertFlavours.js';

const mainOptions = [meats, veg];

function getStarter() {
  const starterOptions = [...veg, 'oyster', 'langoustine'];
}
function getSupplementaryOption(category) {
  return getRandom([
    getRandomThingOrNot(preVeg, false) + getRandom(category),
    getRandom(category) + getRandomThingOrNot(postVeg, true),
  ]);
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
  const firstOption = getRandom([
    getRandomThingOrNot(preMain, false) + getRandom(getRandom(mainOptions)),
    getRandom(getRandom(mainOptions)) + getRandomThingOrNot(postMain, true),
  ]);

  return `${firstOption}, ${getSupplementaryOption(
    veg
  )}, ${getRandomSupplementaryOption()}, ${getFinishingTouch()}`;
}

function generateDessert() {
  return (
    getRandom([getRandom(dessertFlavours), getRandom(fruit)]) +
    getRandomThingOrNot(dessert, true) +
    ', ' +
    getRandomSupplementaryOption() +
    ', ' +
    getRandom([getRandom(dessertFlavours), getRandom(nuts), getRandom(fruit)]) +
    getRandomThingOrNot(sauces, true)
  );
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayOutput() {
  const output = document.getElementById('output');

  output.innerHTML = `<p>${generateMain()}</p><p>${generateMain()}</p><p>${generateMain()}</p><p>${generateDessert()}</p><p>${generateDessert()}</p>`;
}

function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.getElementById('regen').onclick = displayOutput;

displayOutput();
