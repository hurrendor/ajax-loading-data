var responseObject;

function loadJSON() {
  var jsonSetup = new XMLHttpRequest();
  jsonSetup.onload = function() {
    if(jsonSetup.status === 200) {;
      responseObject = JSON.parse(jsonSetup.responseText);

      var newContent = '';
      newContent += "<h2>Explore Italy</h2>";
      for ( i in responseObject.location) {
        console.log(responseObject.location[i]);
        newContent += '<article>';
          newContent += '<h3>' + responseObject.location[i].name + '</h3>';
          newContent += '<p>' + responseObject.location[i].description + '</p>';
        newContent += '</article>';
      }

      document.getElementById('main').innerHTML = newContent;
    }
  }
  jsonSetup.open('GET', 'data/data.json', true);
  jsonSetup.send(null);
};


/**XML**/

//gets the content of each XML element
function getNodeValue(obj, tag) {
  return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}


function loadXML() {
  var xmlSetup = new XMLHttpRequest();
  var location, lname, latitude, longitude; //variable setup

  //grab map of country
  var countryMap = '<figure id="country-map"><img src="img/country-map.png"><figcaption id="country-locations"><h2>Locations to Visit In Kenya</h2></figcaption></figure>';
  document.getElementById('main').innerHTML = countryMap;
  xmlSetup.onload = function() {
    if(xmlSetup.status === 200) {

      var response = xmlSetup.responseXML; //setup XML // returns...??
      var locations = response.getElementsByTagName('location');

      for (var i = 0; i < locations.length; i++){
        let locationPointer = document.createElement('span');
        locationPointer.classList.add('fa');
        locationPointer.classList.add('fa-map-pin');
        locationPointer.style.top = (getNodeValue(locations[i], 'longitude') + 'px');
        locationPointer.style.left = (getNodeValue(locations[i], 'latitude') + 'px');
        document.getElementById('country-map').appendChild(locationPointer);

        let locationCaption = document.createElement('p');
        let innerTextNode =  ("Location #" + (i+1) + ": " + getNodeValue(locations[i], 'lname'));
        locationCaption.innerText = innerTextNode;
        console.log(document.getElementById('country-locations'));
        document.getElementById('country-locations').appendChild(locationCaption);
      }
    }
  }
  xmlSetup.open('GET', 'data/data.xml', true);
  xmlSetup.send(null);
};


//load data pertaining to that country

function loadHTML() {
  var htmlSetup = new XMLHttpRequest();
  var country = selectForm.value;


  htmlSetup.onload = function(){
    console.log('htmlsetup.onload structured');
    if(htmlSetup.status === 200) { //will not work locally, only on a server
      document.getElementById('main').innerHTML = htmlSetup.responseText;
    }
  };

//make an array and cycle thru data types?
  htmlSetup.open('GET', 'data/data.html', true);
  // htmlSetup.open('GET', data/data.xml, true);
  htmlSetup.send(null);
  loadJSON();
};

var selectForm = document.getElementById('dropdown');

function loadData() {
  var country = selectForm.value;
  console.log(country);
  switch(country) {
    case 'china':
    loadHTML();
    break;

    case 'italy':
    loadJSON();
    break;

    case 'kenya':
    loadXML();
    console.log('kenya');
    break;

    default:
    console.log('default called');
    break;
  }
}
