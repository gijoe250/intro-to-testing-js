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

//Unit test for isEven
describe("isEven", function (){
    it('should be a function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should be a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should be true when executed with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should be true when executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should be false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should be false when executed with "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should be true when executed with "8', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should be false when executed with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should be false when executed with true or false', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should be false when executed with no input', function () {
        expect(isEven()).toBe(false);
    });
})

//Unit test for isVowel
describe("isVowel", function (){
    it('should be a function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true with value "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true with value "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false with value "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false with value 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false with value true or false', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false with value "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false with no input', function () {
        expect(isVowel()).toBe(false);
    });
})

//Unit test for add
describe("add", function (){
    it('should be a funciton', function () {
        expect(typeof add).toBe("function");
    });
    it('should return a number', function () {
        expect(typeof add()).toBe("number");
    });
    it('should return 5 with inputs 2 and 3', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 with inputs -3 and -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 with inputs "5" and 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 with inputs "-4" and "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN with inputs "banana" and "split"', function () {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('should return NaN with input 2 and "apples"', function () {
        expect(add(2, "apples")).toBe(NaN);
    });
    it('should return Nan with no input', function () {
        expect(add()).toBe(NaN);
    });
})