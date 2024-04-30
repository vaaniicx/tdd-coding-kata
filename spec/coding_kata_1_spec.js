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
        expect(shipFinder.find('..\n..'))
            .toEqual("Spaceship lost forever.");
    });

    it('Should return [1,0] for given map', function() {
        expect(shipFinder.find('...\n.X.'))
            .toEqual('Ship found at (1, 0).');
    });

    it('Should return [7,2] for given map', function() {
        expect(shipFinder.find('..........\n..........\n..........\n.......X..\n..........\n..........'))
            .toEqual("Ship found at (7, 2).");
    });
});