const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
    const intern = new Intern("Ibrahim", 1, "ibrahimzerlin@hotmail.com", "College");

    expect(intern.name).toBe("Ibrahim");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("ibrahimzerlin@hotmail.com");
    expect(intern.school).toBe("College")
    expect(intern.role).toBe("Intern")
});

test("gets Intern school", () => {
    const intern = new Intern("Ibrahim", 1, "ibrahimzerlin@hotmail.com", "College");
    expect(intern.getSchool()).toBe("College");
});

test("gets Intern role", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
});