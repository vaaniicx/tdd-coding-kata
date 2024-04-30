/**
 * Self Study 1 – TDD Coding Kata “Help ALF“
 * 
 * Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. 
 * Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. 
 * Now it's hovering in space. ALF has the technology to bring the spaceship home if he can lock on to its location.
 * 
 * The map will be given in the form of a string with \n separating new lines. 
 * The bottom left of the map is [0, 0]. X is ALF's spaceship.
 * 
 * In this example:
 * findSpaceship(map) => [7, 2]
 * If you cannot find the spaceship, the result should be "Spaceship lost forever."
 */

function ShipFinder() {}
ShipFinder.prototype.find = function(map) {
    let coordinates = findShipCoordinates(map);
    return coordinates ? "Ship found at (" + coordinates[0] + ", " + coordinates[1] + ")." : "Spaceship lost forever.";
};

function findShipCoordinates(map) {
    let rows = map.split('\n');
    for (let index = 0; index < rows.length; index++) {
        if (rows[index].indexOf('X') > -1) {
            // Ship is here in this row -> set coordinates
            let x = rows[index].indexOf('X'); // Set x to the position of 'X' in the row
            let y = (rows.length - index) - 1; // Substract current index - 1 from the number of total rows
            return [x, y];
        }
    }
    return null; // Ship cannot be found
}