const Circle = require("../lib/circle")

describe("Circle",()=>{
  describe("Render Method",()=>{
    it("should render a circle string",()=>{
      const circle = new Circle({
        logoName:"war",
        textColor:"red",
        logoColor:"brown",
        logoShape:"circle",
      });
      expect(circle.render()).toBe(
        `<circle cx="50" cy="50" r="50" fill="brown"/>`
      )
    })
  })
})