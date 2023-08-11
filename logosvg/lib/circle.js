const shape =require('./shape');

class circle extends shape {
  constructor(answer){
    super(answer);
  }
  render(){
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}"/>`
  }
}

module.exports =circle