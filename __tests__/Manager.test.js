const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
    const manager = new Manager("Ibrahim", 1, "ibrahimzerlin@hotmail.com", "555-555-5555");

    expect(manager.name).toBe("Ibrahim");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("ibrahimzerlin@hotmail.com");
    expect(manager.officeNumber).toBe("555-555-5555")
    expect(manager.role).toBe("Manager")
});

test("gets employee role", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
});