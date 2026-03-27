
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // Use provided coordinates for Solutions Faith Ministry International
    var myLatlng = new google.maps.LatLng(5.716958607569511, -0.29552748944243457);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // Place marker directly at provided coordinates
    var placeName = 'Solutions Faith Ministry International';
    map.setCenter(myLatlng);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png',
        title: placeName
    });

    var mapsUrl = 'https://maps.app.goo.gl/5CEdE8fvPX45ao2y7';
    var infoWindow = new google.maps.InfoWindow({
        content: '<div><h3>' + placeName + '</h3><p>PP83+MQ7, Unnamed Road, Amasaman</p>' +
                 '<p><a href="' + mapsUrl + '" target="_blank" rel="noopener">Open in Google Maps</a></p></div>'
    });

    marker.addListener('click', function() {
        // Open InfoWindow; user can click the link to open the Google Maps app/page
        infoWindow.open(map, marker);
    });

    // Also allow double-click to open the Google Maps link directly
    marker.addListener('dblclick', function() {
        window.open(mapsUrl, '_blank', 'noopener');
    });
    
}