
const Circle = require('../lib/shapes.js');

// A testing suite for Arithmetic is created.
describe('Circle', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('render', () => {
    it('should  render the circle shape color', () => {

        const newCircle = new Circle();
        newCircle.shapeColor = "red"
      expect(newCircle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });
});