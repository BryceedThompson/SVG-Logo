const {Square, Triangle, Circle} = require("../lib/shapes");

// these test the shapeRender function for each individual shape
describe('Square',()=>{
    test('Should generate SVG for Square',()=>{
    const square = new Square('abc','red','green');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<rect x="70" y="20" width="160" height="160" stroke="black" fill='green'/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill='red'>ABC</text>\n</svg>`;
    expect(square.shapeRender()).toEqual(expectedSVG);
    });
})

describe('triangle',()=>{
    test('Should generate SVG for Triangle',()=>{
    const triangle = new Triangle('abc','red','green');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<polyline points="150 12,50 188, 250 188" fill='green'/>\n<text x="150" y="160" font-size="60" text-anchor="middle" fill='red'>ABC</text>\n</svg>`
    expect(triangle.shapeRender()).toEqual(expectedSVG);
    });
})

describe('circle',()=>{
    test('Should generate SVG for Circle',()=>{
    const circle = new Circle('abc','red','green');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="green" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>\n</svg>`
    expect(circle.shapeRender()).toEqual(expectedSVG);
    });
})

module.exports = {Square, Triangle, Circle};