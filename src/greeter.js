module.exports = function (config) {
  const defaultName = config.defaultName;
  return {
    sayHello: function (name) {
      var result = 'Hello ';

      if (name === undefined) {
        result += defaultName;
      } else {
        result += name;
      }

      result += '!\n';
      return result;
    },
  };
};
