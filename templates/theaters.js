//Current location with googleMaps API
function getLocation() {
    if (navigator.geolocation) {
        //callback to the the GetAddress function
        navigator.geolocation.getCurrentPosition(GetAddress);
    } else {
        let x = $("#location")
            .text("Geolocation is not supported by this browser.")
    }
}

function GetAddress(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    //map value of lat and long
    const latlng = new google.maps.LatLng(lat, lng);
    const geocoder = new google.maps.Geocoder();

    //reverse geocoding(address lookup from the map value)
    geocoder.geocode({
        'latLng': latlng
    }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                const add = results[0].formatted_address;
                const value = add.split(",");

                count = value.length;
                state = value[count - 2];
                city = value[count - 3];
                let x = $("#location").text(city + ", " + state);
            }
        }
    });

    //specifics of the API call
    const request = {
        location: latlng,
        radius: '2500',
        query: 'movie'
    };

    //div element from html
    const results = $('#results')[0];

    //find places from GoogleMaps Places library
    let service = new google.maps.places.PlacesService(results);

    //instead showing the map->the list of places with addresses and ratings
    service.textSearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const listName = $('#listName').text('List of the movie theaters near you:')
            for (let i = 0; i < results.length; i++) {
                let name = results[i].name + "; Address: " + results[i].formatted_address + "; Rating: " + results[i].rating;
                let par = $('<p/>')
                    .text(name)
                    .appendTo('#results');
            }
        }
    });
}

getLocation()