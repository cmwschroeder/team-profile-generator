const {Engineer } = require("../lib/team");

describe("Engineer", () => {
  describe("name", () => {
    // Check to see we are setting and getting the name for the created engineer class correctly
    it("should return the name that we initiliaze the engineer with", () => {

      const testEngineer = new Engineer("Christian", "12", "cmwschroeder@gmail.com", "cmwschroeder");

      expect(testEngineer.getName()).toEqual("Christian");
    });
  });
  describe("id", () => {
    // Check to see we are setting and getting the id for the created engineer class correctly
    it("should return the id that we initiliaze the engineer with", () => {

      const testEngineer = new Engineer("Christian", "12", "cmwschroeder@gmail.com", "cmwschroeder");

      expect(testEngineer.getId()).toEqual("12");
    });
  });
  describe("email", () => {
    // Check to see we are setting and getting the email for the created engineer class correctly
    it("should return the email that we initiliaze the engineer with", () => {

        const testEngineer = new Engineer("Christian", "12", "cmwschroeder@gmail.com", "cmwschroeder");

      expect(testEngineer.getEmail()).toEqual("cmwschroeder@gmail.com");
    });
  });
  describe("role", () => {
    // Test that checks to see that the role of the class engineer is set to engineer
    it("should return the role of engineer", () => {

        const testEngineer = new Engineer("Christian", "12", "cmwschroeder@gmail.com", "cmwschroeder");
      
      expect(testEngineer.getRole()).toEqual("Engineer");
    });
  });
  describe("github", () => {
    // Test that checks to see that we set and get the github username correctly
    it("should return the github username of the engineer", () => {

        const testEngineer = new Engineer("Christian", "12", "cmwschroeder@gmail.com", "cmwschroeder");
      
      expect(testEngineer.getGithub()).toEqual("cmwschroeder");
    });
  });
});