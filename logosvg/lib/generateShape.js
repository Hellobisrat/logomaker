const Circle= require('./circle')
const Square = require ('./square');
const Triangle = require('./triangle');

const generateShape =(data)=>{
  const {logoShape}=data;
  switch(logoShape){
    case "circle":
      const generateCircle = new Circle(data);
      return generateCircle;
      break; 

      case "triangle":
      const generateTriangle = new Triangle(data);
      return generateTriangle;
      break;

      case "square":
      const generateSquare = new Square(data);
      return generateSquare;
      break;

      default:
      return `Ooops, somethig went wrong`
      break;

  }
}

module.exports={generateShape}