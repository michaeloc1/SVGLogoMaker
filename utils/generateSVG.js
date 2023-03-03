

const Circle = require("../lib/shapes.js")

const generateSVG = (data) => {
   // console.log("hello")
   // console.log(data)
   //let newCircle = new Circle(data.text, data.textColor, data.shapeColor);
   //newCircle.shapeColor = "red"
   // console.log(newCircle.render())
   let aCircle = new Circle();
   aCircle.text= "YOU"
   aCircle.textColor = "gold"
   aCircle.shapeColor = "black"
   console.log(aCircle.render())

}

module.exports = generateSVG