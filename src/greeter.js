module.exports = function (config) {
  const defaultName = config.defaultName;
  return {
    sayHello: function (name) {
      const result = {
        name: (name === undefined || name === "") ? defaultName : name
      };
      result.say = 'Hello ' + result.name + '!';
      return result;
    },
  };
};
