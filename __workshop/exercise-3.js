// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position
const rp = require('request-promise');

let location = {lat:37.8267,lng: -122.4233};

function getCurrentTemperatureAtPosition(position) {
    return rp(`https://api.darksky.net/forecast/79eb9c4cd8e09a1c4b879b2b49970e87/${position.lat},${position.lng}`)
    .then((res)=>{
        let data=JSON.parse(res);
            let Temp = data.currently.temperature;
        return Temp;
    })
}

getCurrentTemperatureAtPosition(location).then(temp => {
    console.log(temp);
    
});


module.exports = { getCurrentTemperatureAtPosition, rp };

