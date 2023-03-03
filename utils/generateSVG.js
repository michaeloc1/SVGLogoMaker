

const Circle = require("../lib/shapes.js")

const generateSVG = (data) => {
   // console.log("hello")
   // console.log(data)
   let newCircle = new Circle(data.text, data.textColor, data.shapeColor);
    console.log(newCircle.render())

}

module.exports = generateSVG