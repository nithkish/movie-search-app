module.exports = {
  /**
   * @returns {string} string
   */
  process() {
    return "module.exports = {};";
  },
  /**
   *@returns {string} string
   */
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};

export {}
