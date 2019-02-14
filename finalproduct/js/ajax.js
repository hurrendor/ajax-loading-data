/**Variable Setup**/

let responseObject;
const selectForm = document.getElementById('dropdown');
const mainSpace = document.getElementById('main');

//Pull information based on what country is selected
function loadData() {
  var country = selectForm.value;
  switch(country) {
    case 'china':
    loadHTML();
    break;

    case 'italy':
    loadJSON();
    break;

    case 'kenya':
    loadXML();
    break;

    case 'uruguay':
    loadWithJQuery();
    break;

    default:
    break;
  }
};

/**HTML**/
/**Will load data for China**/
function loadHTML() {
  var htmlSetup = new XMLHttpRequest();

  htmlSetup.onload = function(){
    if(htmlSetup.status === 200) { //will not work locally, only on a server
      mainSpace.innerHTML = htmlSetup.responseText;
    }
  };

  htmlSetup.open('GET', 'data/data.html', true);
  htmlSetup.send(null);
};


/**JSON**/
/**Loads data for Italy**/
function loadJSON() {
  var jsonSetup = new XMLHttpRequest();
  jsonSetup.onload = function() {
    if(jsonSetup.status === 200) {;
      responseObject = JSON.parse(jsonSetup.responseText);

      var newContent = '';
      newContent += "<h2>Explore Italy</h2>";
      for ( i in responseObject.location) {
        newContent += '<article>';
          newContent += '<h3>' + responseObject.location[i].name + '</h3>';
          newContent += '<p>' + responseObject.location[i].description + '</p>';
        newContent += '</article>';
      }

      //add the content to the page
      mainSpace.innerHTML = newContent;
    }
  }
  jsonSetup.open('GET', 'data/data.json', true);
  jsonSetup.send(null);
};


/**XML**/
/**
  This function set allows you to take information from the XML document
  We'll start by getting the content of each XML element
**/
function getNodeValue(obj, tag) {
  return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

function loadXML() {
  var xmlSetup = new XMLHttpRequest();

  //grab map of country and place on page
  var countryMap = '<figure id="country-map"><img src="img/country-map.png"><figcaption id="country-locations"><h2>Locations to Visit In Kenya</h2></figcaption></figure>';
  mainSpace.innerHTML = countryMap;

  xmlSetup.onload = function() {
    if(xmlSetup.status === 200) {

      var response = xmlSetup.responseXML; //setup XML // returns...??
      var locations = response.getElementsByTagName('location');

      for (var i = 0; i < locations.length; i++){
        //add map indicators for each location
        let locationPointer = document.createElement('span');
        locationPointer.classList.add('fa');
        locationPointer.classList.add('fa-map-pin');
        locationPointer.style.top = (getNodeValue(locations[i], 'longitude') + 'px');
        locationPointer.style.left = (getNodeValue(locations[i], 'latitude') + 'px');
        document.getElementById('country-map').appendChild(locationPointer);

        //add some captions to say what the locations are
        let locationCaption = document.createElement('p');
        let innerTextNode =  ("Location #" + (i+1) + ": " + getNodeValue(locations[i], 'lname'));
        locationCaption.innerText = innerTextNode;
        // console.log(document.getElementById('country-locations'));
        document.getElementById('country-locations').appendChild(locationCaption);
      }
    }
  }
  xmlSetup.open('GET', 'data/data.xml', true);
  xmlSetup.send(null);
};


/**jQuery**/
function loadWithJQuery() {
  $('#main').load('./uruguay.html'); //loads HTML snippets only
        //specific snippet - #uruguay-image

    //load in some different data (JSON)
    $.getJSON('data/uruguay.json')
    .done( function(data) {
      $.each( data.location, function (i, location) {
        $('<h2>').text(data.location[i].name).appendTo('#uruguay-info');
        $('<p>').text(data.location[i].description).appendTo('#uruguay-info');
      })
    }).fail( function() {
      $('#main').innerText = "<h2>" + err + " Sorry, you can't go to Uruguay";
    })
}
