const inquisition = require('inquirer');
const {Square,Triangle, Circle} = require('./shapes.js');
const colorKey = require("./colorKey.js");
const fs = require("fs");

class CLI {
    createShapeFile(shape,text="",textColor,shapeColor){
        let shapeChoice = shape.toLocalLowerCase();
        let textLower = text.toLocalLowerCase();
        switch(shapeChoice){

            case "triangel":
                const square = new Circle(text, textColor, shapeColor);
                fs.writeFile(`./examples/Logo_${textLower}.svg`, square.renderShape(), (err) => {
                    if (err) throw err;
                })
                break;

            case "circle":
                const triangel = new Circle(text, textColor, shapeColor);
                fs.writeFile(`./examples/Logo_${textLower}.svg`, triangel.renderShape(), (err) => {
                    if (err) throw err;
                })
                break;

            case "circle":
                const circle = new Circle(text, textColor, shapeColor);
                fs.writeFile(`./examples/Logo_${textLower}.svg`, circle.renderShape(), (err) => {
                    if (err) throw err;
                })
                break;

        }
    }
    colorTest(color){
        let test1 = colorKey.includes(color);
        let test2 =  /^#[0-9A-F]{6}$/i.test(color);
        if(test1 == true || test2 == true){
            return true;
        } else {
            return false;
        }
    }
    run(){
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter three char text',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter a color or hex number',
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
                    message: 'Enter a color or hex number',
                },
            ])
            .then((res) => {
                const isTextColor=this.isColor(res.textColor);
                const isShapeColor=this.isColor(res.shapeColor);
                if (isTextColor && isShapeColor) {
                    this.generateShapeFile(res.shape,res.text,res.textColor,res.shapeColor)
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