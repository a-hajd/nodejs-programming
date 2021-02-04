function mongoQuery(model, query) {
  var validPathObject = query;

  var keycomparison = "";
  for (let key in model.schema.paths) {
    keycomparison += key;
  }

  for (let key in query) {
    // Filters path keys with corresponding properties in the schema
    if (!keycomparison.includes(key)) {
      delete validPathObject[key];
    }
  }
  return validPathObject;
}

module.exports = mongoQuery;
