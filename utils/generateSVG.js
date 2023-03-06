

const shapes = require("../lib/shapes.js")

const generateSVG = (data) => {

      switch(data.shape){
         case 'Circle':
            const newCircle = new shapes.Circle(data.text, data.textColor, data.shapeColor);
            return newCircle.render();
            break;

         case 'Triangle':
            const newTriangle = new shapes.Triangle(data.text, data.textColor, data.shapeColor)
            return newTriangle.render();
            break;
         case 'Square':
            const newSquare = new shapes.Square(data.text, data.textColor, data.shapeColor);
            return newSquare.render();
            break;


      }

}

module.exports = generateSVG
