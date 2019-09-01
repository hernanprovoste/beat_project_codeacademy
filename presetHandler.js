// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (recuestType, index, newPresentArray) => {
  if (recuestType === 'GET') {
    let present = getPresent(index);
    if (present) {
      return [200, present];
    } else {
      return [400];
    }
  } else if (recuestType === 'PUT') {
    const newPresent = createOrUpdatePresent(index, newPresentArray);
    if (newPresent) {
      return [200, newPresent];
    } else {
      return [404];
    }
  } else {
    return [400];
  }
};

const getPresent = (index) => {
  return present[index] || null;
};

const createOrUpdatePresent = (index, arr) => {
  if (!present[index]) {
    return;
  }
  present[index] = arr;
  return present[index];
}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
