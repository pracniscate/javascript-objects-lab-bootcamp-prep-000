var recipes = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj);
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.prop;
}