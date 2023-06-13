
class Square{

    constructor(text,textColor,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    shapeRender(){
        let charText = this.text.toUpperCase().substring(0,3);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<rect x="70" y="20" width="160" height="160" stroke="black" fill='${this.shapeColor}'/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${charText}</text>\n</svg>`
    }
}

class Triangle extends Square{

    constructor(text, textColor, shapeColor){
        super(text,textColor,shapeColor);
    }

    shapeRender(){
        let charText = this.text.toUpperCase().substring(0,3);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<polyline points="150 12,50 188, 250 188" fill='${this.shapeColor}'/>\n<text x="150" y="160" font-size="60" text-anchor="middle" fill='${this.textColor}'>${charText}</text>\n</svg>`
    }
}


class Circle extends Square{

    constructor(text, textColor, shapeColor){
        super(text,textColor,shapeColor);
    }

    shapeRender(){
        let charText = this.text.toUpperCase().substring(0,3);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${charText}</text>\n</svg>`
    }
}
module.exports = {Square, Triangle, Circle};
