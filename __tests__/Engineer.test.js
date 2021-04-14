const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Ibrahim", 1, "ibrahimzerlin@hotmail.com", "hbbc248");

    expect(engineer.name).toBe("Ibrahim");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("ibrahimzerlin@hotmail.com");
    expect(engineer.github).toBe("hbbc248")
    expect(engineer.role).toBe("Engineer")
});

test("gets engineer github", () => {
    const engineer = new Engineer("Ibrahim", 1, "ibrahimzerlin@hotmail.com", "hbbc248");
    expect(engineer.getGithub()).toBe("hbbc248");
});

test("gets engineer role", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
});