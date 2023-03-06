
const shapes = require('../lib/shapes.js');

// A testing suite for circle is created.
describe('Circle', () => {
  // A test is created to check that the color of the circle comes back the color entered.
  describe('render', () => {
    it('should  render the circle shape color', () => {
        const renderString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">MOC</text>
      
      </svg>`
        const newCircle = new shapes.Circle('MOC', 'red', 'blue')
      expect(newCircle.render()).toEqual(renderString);
    });
  });
});