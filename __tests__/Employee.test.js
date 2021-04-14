const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Ibrahim", 1, "ibrahimzerlin@hotmail.com");

    expect(employee.name).toBe("Ibrahim");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("ibrahimzerlin@hotmail.com");
    expect(employee.role).toBe("Employee")
});

test("gets employee name", () => {
    const employee = new Employee("Ibrahim", 1, "ibrahimzerlin@hotmail.com");
    expect(employee.getName()).toBe("Ibrahim")
});

test("gets employee id", () => {
    const employee = new Employee("Ibrahim", 1, "ibrahimzerlin@hotmail.com");
    expect(employee.getId()).toBe(1);
});

test("gets employee email", () => {
    const employee = new Employee("Ibrahim", 1, "ibrahimzerlin@hotmail.com");
    expect(employee.getEmail()).toBe("ibrahimzerlin@hotmail.com");
});

test("gets employee role", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
});