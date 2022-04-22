const { Manager } = require("../lib/team");

describe("Manager", () => {
  describe("name", () => {
    // Check to see we are setting and getting the name for the created manager class correctly
    it("should return the name that we initiliaze the manager with", () => {

        const testManager = new Manager("Christian", "12", "cmwschroeder@gmail.com", "3");

      expect(testManager.getName()).toEqual("Christian");
    });
  });
  describe("id", () => {
    // Check to see we are setting and getting the id for the created manager class correctly
    it("should return the id that we initiliaze the manager with", () => {

      const testManager = new Manager("Christian", "12", "cmwschroeder@gmail.com", "3");

      expect(testManager.getId()).toEqual("12");
    });
  });
  describe("email", () => {
    // Check to see we are setting and getting the email for the created manager class correctly
    it("should return the email that we initiliaze the manager with", () => {

        const testManager = new Manager("Christian", "12", "cmwschroeder@gmail.com", "3");

      expect(testManager.getEmail()).toEqual("cmwschroeder@gmail.com");
    });
  });
  describe("role", () => {
    // Test that checks to see that the role of the class manager is set to Manager
    it("should return the role of manager", () => {

        const testManager = new Manager("Christian", "12", "cmwschroeder@gmail.com", "3");
      
      expect(testManager.getRole()).toEqual("Manager");
    });
  });
  describe("github", () => {
    // Test that checks to see that we set and get the school name correctly
    it("should return the room number of the manager", () => {

        const testManager = new Manager("Christian", "12", "cmwschroeder@gmail.com", "3");
      
      expect(testManager.getOfficeNumber()).toEqual("3");
    });
  });
});