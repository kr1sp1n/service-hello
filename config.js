module.exports = function () {
  return {
    port: process.env.PORT || 8580,
    defaultName: process.env.DEFAULT_NAME || 'World',
  };
};
