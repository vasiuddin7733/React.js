export default (enums, type) => {
  if (type) {
    switch (type) {
      case "keys":
        return Object.keys(enums);
      case "values":
        return Object.values(enums);
      case "entries":
        return Object.entries(enums);
      case "graphql":
        return Object.keys(enums).join(" ");
      case "mongo":
        return Object.keys(enums);
      case "reference": // ENUM.KEY = KEY => { KEY: KEY }
        return Object.keys(enums).reduce(
          (obj, key) => ({ ...obj, [key]: key }),
          {}
        );
      default:
        break;
    }
  }
  return {
    keys: Object.keys(enums),
    values: Object.keys(enums),
    entries: Object.entries(enums),
    graphql: Object.keys(enums).join(" "),
    mongo: Object.keys(enums),
    reference: Object.keys(enums).reduce(
      (obj, key) => ({ ...obj, [key]: key }),
      {}
    ),
  };
};
