// Exercise 2 - `getAddressPosition`
// ---------------------------------
// 1. Complete the code of this function to return a `Promise` for a lat/lng object
// 2. Use the [OpenCage Data API](https://opencagedata.com/) to do this
//     - Sign up for an account (free) and follow the various guides to get started.
//     - [NodeJs tutorial](https://opencagedata.com/tutorials/geocode-in-nodejs)
//     - missing from the above is the need for the `key` in the request object.
//     - disregard the `.env` guidelines for now.
// 3. Once you have it working, pass it a few address to see what the responses look like.
// 4. Make sure to only return an object with lat/lng and not the whole response

const opencage = require('opencage-api-client');
require('dotenv').config();

const NodeGeocoder = require('node-geocoder');

let address = '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8';

const geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: 'a5f412c675154e1da12f64c6c178ce4b'
});

function getPosition(address) {
    return geocoder.geocode(address)
    .then ((res) => {
        let location = {lat: res[0].latitude,
                        lng: res[0].longitude};
        return location;
    })
};

getPosition(address).then(location => {
    console.log(location);
});



module.exports = { geocoder, NodeGeocoder, getPosition };