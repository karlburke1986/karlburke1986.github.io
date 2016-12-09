$.getScript('https://www.google.com/jsapi', function () {
    google.load('maps', '3', {callback: function () {
            geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': your_address}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var options = {zoom: 10, center: {lat: lat, lng: lng}};
                    var map = new google.maps.Map(document.getElementById('map-container'), options);
                    new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });

    }});
});