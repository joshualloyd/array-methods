var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(planet) {
	var planetElement = document.createElement('p');
	planetElement.innerHTML = planet;
	el.appendChild(planetElement);
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizedPlanets = planets.map(function(planet) {
	var capitalFirstLetter = planet.charAt(0).toUpperCase();
	console.log(capitalFirstLetter);
	var planetArr = planet.split('');
	console.log(planetArr);
	var thing = planetArr.splice(0, 1, capitalFirstLetter);
	console.log(thing);
	var capitalizedPlanet = planetArr.join('');
	console.log(capitalizedPlanet);
	return capitalizedPlanet

	// return planet.split('').splice(0, 1, planet.charAt(0).toUpperCase()).join('');

});

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
