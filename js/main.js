function initMap() {
    const uluru = { lat: 49.97978917401843, lng: 36.308813857044704 }; 
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      styles:[
      {
          "featureType": "poi.attraction",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.government",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.place_of_worship",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.school",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.sports_complex",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      }
  ],
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    const image ="sprites/item.png";
    const beachMarker = new google.maps.Marker({
      position: { lat: 49.97978917401843, lng: 36.308813857044704 },
      map,
      icon: image,
    });
  }
  
  window.initMap = initMap;
