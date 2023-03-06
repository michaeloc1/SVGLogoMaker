
const Circle = require('../lib/shapes.js');

// A testing suite for Arithmetic is created.
describe('Circle', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('render', () => {
    it('should  render the circle shape color', () => {
        const renderString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">MOC</text>
      
      </svg>`
        const newCircle = new Circle();
        newCircle.shapeColor = 'blue'
        newCircle.text = "MOC"
        newCircle.textColor = "red"
      expect(newCircle.render()).toEqual(renderString);
    });
  });
});