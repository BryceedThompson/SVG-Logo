
class Square{

    constructor(text,textColor,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    ShapeRender(){
        let charTest = this.text.toUpperCase().substring(0,3);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${charTest}</text>\n</svg>`
    }
}

class Triangle{

    constructor(text,textColor,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    ShapeRender(){
        let charTest = this.text.toUpperCase().substring(0,3);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${charTest}</text>\n</svg>`
    }
}


class Circle{

    constructor(text,textColor,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    ShapeRender(){
        let charTest = this.text.toUpperCase().substring(0,3);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${charTest}</text>\n</svg>`
    }
}
module.exports = {Square, Triangle, Circle};
