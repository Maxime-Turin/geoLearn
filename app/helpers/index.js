module.exports = {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  minimizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  },

};
