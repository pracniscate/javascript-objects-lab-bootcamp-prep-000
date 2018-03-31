var recipes = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes.prop2 = 2;
  return recipes;
}