// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
// 
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
// 
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.

const { getCurrentTemperatureAtPosition, rp } = require(__dirname + '/exercise-3.js');
const { geocoder, NodeGeocoder, getPosition } = require(__dirname + '/exercise-2.js');

// Given an address as a string, returns the temperature 
// Use the getCurrentTemperatureAtPosition function
let address = '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8';


const getCurrentTemperature = (address) => {
        // return (getCurrentTemperatureAtPosition(getPosition(address).then))
        getPosition(address)
        .then(coord => {
            getCurrentTemperatureAtPosition(coord)
            .then (temp => {
                
            })
        })

};