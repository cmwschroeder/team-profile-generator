const { Intern } = require("../lib/team");

describe("Intern", () => {
  describe("name", () => {
    // Check to see we are setting and getting the name for the created intern class correctly
    it("should return the name that we initiliaze the intern with", () => {

        const testIntern = new Intern("Christian", "12", "cmwschroeder@gmail.com", "harvard");

      expect(testIntern.getName()).toEqual("Christian");
    });
  });
  describe("id", () => {
    // Check to see we are setting and getting the id for the created intern class correctly
    it("should return the id that we initiliaze the intern with", () => {

      const testIntern = new Intern("Christian", "12", "cmwschroeder@gmail.com", "harvard");

      expect(testIntern.getId()).toEqual("12");
    });
  });
  describe("email", () => {
    // Check to see we are setting and getting the email for the created intern class correctly
    it("should return the email that we initiliaze the intern with", () => {

        const testIntern = new Intern("Christian", "12", "cmwschroeder@gmail.com", "harvard");

      expect(testIntern.getEmail()).toEqual("cmwschroeder@gmail.com");
    });
  });
  describe("role", () => {
    // Test that checks to see that the role of the class intern is set to Intern
    it("should return the role of intern", () => {

        const testIntern = new Intern("Christian", "12", "cmwschroeder@gmail.com", "harvard");
      
      expect(testIntern.getRole()).toEqual("Intern");
    });
  });
  describe("github", () => {
    // Test that checks to see that we set and get the school name correctly
    it("should return the school that the intern went to", () => {

        const testIntern = new Intern("Christian", "12", "cmwschroeder@gmail.com", "harvard");
      
      expect(testIntern.getSchool()).toEqual("harvard");
    });
  });
});