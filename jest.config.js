module.exports = require('@darkobits/ts').jest({
  coverageThreshold: {
    global: {
      branches: 90,
      lines: 95,
      statements: 95
    }
  }
});
