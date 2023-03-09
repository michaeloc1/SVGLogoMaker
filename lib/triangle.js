const Shapes = require("../lib/shapes.js")

//Triangle class is child of Shapes class. It has 3 properties that set the
//text, text color and shapecolor. It has 2 methods, one returns the shape
//portion of svg tag and the other the text portion
class Triangle extends Shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
      

    }

    renderBottom(){
       return `<text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`
    }
}

module.exports = Triangle;