const Spiderman = require("../app/spiderman");

describe("Unit testing for Spiderman class", () => {
    it("1. Creater an spiderman object", () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

        expect(andrewGarfield.name).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");

    });
});

describe("Unit testing for Spiderman Method", () => {
    it("2. Test an object method", () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio");
    });
});
