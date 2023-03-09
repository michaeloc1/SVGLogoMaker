const Shapes = require("./shapes");

//Square class is child of Shapes class. It has 3 properties that set the
//text, text color and shapecolor. It has 2 methods, one returns the shape
//portion of svg tag and the other the text portion
class Square extends Shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
       return  `<rect width="200" height="200" fill="${this.shapeColor}" />`
      

    }
    renderBottom(){
        return `<text x="85" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`
    }
}

module.exports = Square;