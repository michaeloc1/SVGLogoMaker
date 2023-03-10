const Shapes = require("../lib/shapes.js")

//Circle class is child of Shapes class. It has 3 properties that set the
//text, text color and shapecolor. It has 2 methods, one returns the shape
//portion of svg tag and the other the text portion
class Circle extends Shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
        return  `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
      
  
    }

    renderBottom(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`

    }
}

module.exports = Circle;