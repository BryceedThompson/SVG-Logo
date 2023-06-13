const inquisition = require('inquirer');
const {Square,Triangle, Circle} = require('./shapes.js');
const colorKey = require("./colorKey.js");
const fs = require("fs");

class CLI {
    // generates SVG file based on the user inputes: shape, color of text and color of shape... user input for the text will also be in the file name
    createShapeFile(shape,text="",textColor,shapeColor){
        let shapeChoice = shape.toLocaleLowerCase();
        let textLower = text.toLocaleLowerCase();
        switch(shapeChoice){

            case "square":
                const square = new Square(text, textColor, shapeColor);
                fs.writeFile(`./example/Logo_${textLower}.svg`, square.shapeRender(), (err) => {
                    if (err) throw err;
                })
                break;

            case "triangle":
                const triangle = new Triangle(text, textColor, shapeColor);
                fs.writeFile(`./example/Logo_${textLower}.svg`, triangle.shapeRender(), (err) => {
                    if (err) throw err;
                })
                break;

            case "circle":
                const circle = new Circle(text, textColor, shapeColor);
                fs.writeFile(`./example/Logo_${textLower}.svg`, circle.shapeRender(), (err) => {
                    if (err) throw err;
                })
                break;

        }
    }
    // test for color in our colorKey file or hex code
    colorTest(color){
        let test1 = colorKey.includes(color);
        let test2 =  /^#[0-9A-F]{6}$/i.test(color);
        if(test1 == true || test2 == true){
            return true;
        } else {
            return false;
        }
    }
    // starts our prompt for user inputs and calls our other functions once the user has inputed their information
    run(){
        return inquisition
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter three char text',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter a color or hex number for the text',
                },
                {
                    type: 'list',
                    message: 'Choose Shape from the list',
                    name: 'shape',
                    choices: ['square', 'triangle', 'cirlce'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a color or hex number for the shape',
                },
            ])
            .then((res) => {
                const isTextColor=this.colorTest(res.textColor);
                const isShapeColor=this.colorTest(res.shapeColor);
                if (isTextColor && isShapeColor) {
                    this.createShapeFile(res.shape,res.text,res.textColor,res.shapeColor)
                    console.log('Logo.svg is generated')
                } else {
                    if (!isTextColor && !isShapeColor) {
                        console.log("Both Text and shape colors are invalid!")
                    } else if (!isShapeColor) {
                        console.log("Shape color is invalid!")
                    }else{
                        console.log("Text color is invalid!")
                    }       
                }
            });
    }
}
module.exports = CLI;