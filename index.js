var recipes = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var key = 1;
  delete recipes.prop;
}