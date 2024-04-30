/**
 * TODO:
 * - RED: Write test cases without implementing functional code
 * - GREEN: Write functional code to pass the tests
 * - REFACTOR: Refactor code if neccessary
 */

describe('Coding Kata 1', function() {
    beforeEach(function() {
        shipFinder = new ShipFinder();
    });

    it('Should return "Spaceship lost forever." for given map', function() {
        shipFinder.find('..\n..');
    });

    it('Should return [1,0] for given map', function() {
        shipFinder.find('...\n.X.');
    });

    it('Should return [7,2] for given map', function() {
        shipFinder.find('..........\n..........\n..........\n.......X..\n..........\n..........');
    });
});