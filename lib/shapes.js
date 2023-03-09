
//Shapes is the parent of circle, square, and triangle classes. Since these
//classes share the same properties they are in the Shapes class. The Shapes
//class also has a method to render the svg tag since all shapes share the 
//same tag
class Shapes{
    constructor(text, textColor, shapeColor){
      
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render(){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    }

}

module.exports = Shapes;