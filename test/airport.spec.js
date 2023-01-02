const { assertEquals, assertLarger } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;



// Test 1 - can a plane land in the airport? -----------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 1 - after landing, is the plane in the airport?`);

// Arrange
airport = new Airport(5);
plane = { id: "plane1" }
expected = 1;

// Act
airport.land(plane);
actual = airport.planesInAirport.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: ${plane.id} landed in airport: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 2 - can airport capacity be changed? -----------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 2 - will more planes be allowed to land by increasing airport capacity from default?`);

// Arrange
airport = new Airport(5, 2);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` }
expected = 2;

// Act
airport.land(plane1);
airport.land(plane2);
actual = airport.planesInAirport.length;


// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Both planes were able to land hence airport capacity successfully increased from defalt size 1 to 2: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 3 - can airport capacity be exceeded? ------------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 3 - will airport capacity be exceeded when attemting to land a plane in a full airport?`);

// Arrange
airport = new Airport(5, 1);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
expected = 1;

// Act
airport.land(plane1);
airport.land(plane2);
actual = airport.planesInAirport.length;


// Assert
result = assertEquals(actual, expected);
console.log(`Test 3: plane refused landing to full airport: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 4 - can a plane take off from an airport?  ------------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 4 - can a plane take off from an airport?`);

// Arrange
airport = new Airport(5);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` }
expected = 0;

// Act
airport.land(plane1);
airport.takeOff(plane1);
actual = airport.planesInAirport.length;


// Assert
result = assertEquals(actual, expected);
console.log(`Test 4: plane took off from airport: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 5 - Will a plane take off from an airport that it is not in? ------------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 5 - can a plane take off from an airport that it is not currently in?`);

// Arrange
airport = new Airport(5);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` }
//expected = null
expected = 0;

// Act
airport.takeOff(plane1)
//actual = plane1.status // change planesFlying
actual = airport.planesFlying.length


// Assert
result = assertEquals(actual, expected);
console.log(`Test 5: A plane can't take off from an airport that it is not currently in: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 6 - Will a plane land in an airport that it is already in? -------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 6 - Can a plane land in an airport that it is already in?`);

// Arrange
airport = new Airport(5, 2);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` }
expected = 1

// Act
airport.land(plane1)
airport.land(plane1)
actual = airport.planesInAirport.length


// Assert
result = assertEquals(actual, expected);
console.log(`Test 6: A plane can't land in an airport that it is already in: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 7 - Will a plane take off in stormy weather? -------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 7 - Will a plane take off in stormy weather?`);

// Arrange
airport = new Airport(5);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
expected = 1

// Act
airport.land(plane1)
airport.weather = 9
airport.takeOff(plane1)
actual = airport.planesInAirport.length


// Assert
result = assertEquals(actual, expected);
console.log(`Test 7: A plane can't take off if the weather is stormy: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 8 - Will a plane land in stormy weather? -------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 8 - Will a plane land in stormy weather?`);

// Arrange
airport = new Airport(9);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
expected = 0

// Act
airport.land(plane1)
actual = airport.planesInAirport.length


// Assert
result = assertEquals(actual, expected);
console.log(`Test 8: A plane will not land if the weather is stormy: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
