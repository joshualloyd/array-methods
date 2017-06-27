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
var capitalPlanets = document.getElementById('capitalized-planets');

var capitalizedPlanets = planets.map(function(planet) {
	var capitalFirstLetter = planet.charAt(0).toUpperCase();
	var planetArr = planet.split('');
	planetArr.splice(0, 1, capitalFirstLetter);
	var capitalizedPlanet = planetArr.join('');
	return capitalizedPlanet
});

capitalizedPlanets.forEach(function(capitalPlanet) {
	var capitalPlanetElement = document.createElement('p');
	capitalPlanetElement.innerHTML = capitalPlanet;
	capitalPlanets.appendChild(capitalPlanetElement);
});

// Use the filter method to create a new array that contains planets with the letter 'e'
var onlyLetterEPlanetsElement = document.getElementById('only-letter-e-planets');

var onlyLetterEPlanets = planets.filter(function(planet) {
	if (planet.includes('e')) {
		return planet;
	}
});

onlyLetterEPlanets.forEach(function(planetWithE) {
	var planetWithEElement = document.createElement('p');
	planetWithEElement.innerHTML = planetWithE;
	onlyLetterEPlanetsElement.appendChild(planetWithEElement);
});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentenceElement = document.getElementById('sentence');

var sentence = words.reduce(function(acc, val) {
	if (acc === '') {
		return	acc + val;
	} else if (val === words[words.length - 1]) {
		return acc + ' ' + val + '.';
	} else {
		return acc + ' ' + val;
	}
}, '');

var sentenceElementChild = document.createElement('p');
sentenceElementChild.innerHTML = sentence;
sentenceElement.appendChild(sentenceElementChild);

