const { Employee } = require("../lib/team");

describe("Employee", () => {
  describe("name", () => {
    // Check to see we are setting and getting the name for the created employee class correctly
    it("should return the name that we initiliaze the employee with", () => {

      const testEmployee = new Employee("Christian", "12", "cmwschroeder@gmail.com");

      expect(testEmployee.getName()).toEqual("Christian");
    });
  });
  describe("id", () => {
    // Check to see we are setting and getting the id for the created employee class correctly
    it("should return the id that we initiliaze the employee with", () => {

      const testEmployee = new Employee("Christian", "12", "cmwschroeder@gmail.com");

      expect(testEmployee.getId()).toEqual("12");
    });
  });
  describe("email", () => {
    // Check to see we are setting and getting the email for the created employee class correctly
    it("should return the email that we initiliaze the employee with", () => {

      const testEmployee = new Employee("Christian", "12", "cmwschroeder@gmail.com");

      expect(testEmployee.getEmail()).toEqual("cmwschroeder@gmail.com");
    });
  });
  describe("role", () => {
    // Test that checks to see that the role of the class employee is set to employee
    it("should return the role of Employee", () => {

      const testEmployee = new Employee("Christian", "12", "cmwschroeder@gmail.com");
      
      expect(testEmployee.getRole()).toEqual("Employee");
    });
  });
});