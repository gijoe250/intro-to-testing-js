// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for sayHello function
describe("sayHello", function (){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!"', function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!"', function () {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!"', function () {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!");
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
        expect(sayHello(null)).toBe("Hello, World!");
        expect(sayHello("")).toBe("Hello, World!");
        expect(sayHello(2.3)).toBe("Hello, World!");
        expect(sayHello("5")).toBe("Hello, World!");
    });
})

//Unit test for isFive function
describe("isFive", function (){
    it('should be a function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true if 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false if not a number', function () {
        expect(isFive("Im a string")).toBe(false);
    });
    it('should return true for "5"', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false if a number that is not 5', function () {
        expect(isFive(7)).toBe(false);
    });
})