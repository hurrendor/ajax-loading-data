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

  //grab map of kenya
  var countryMap = '<figure id="country-map"><img src="img/country-map.png">';
  // var countryMap = document.createElement('img');
  // countryMap.setAttribute('src','img/kenya.jpg');
  // countryMap.setId('id', 'country-map');
  console.log(countryMap);
  document.getElementById('main').innerHTML = countryMap;
  xmlSetup.onload = function() {
    if(xmlSetup.status === 200) {

      var response = xmlSetup.responseXML; //setup XML // returns...??
      var locations = response.getElementsByTagName('locations');
      console.log(xmlSetup.responseText, locations);
      for (var i = 0; i < locations.length; i++){
        var tempVar = document.createElement('span').addClass('fa fa-map-pin');
        tempVar.style.position = 'relative';
      }
      // location =

    }
  }
  xmlSetup.open('GET', 'data/data.xml', true);
  xmlSetup.send(null);
};


//load data pertaining to that country

function loadHTML() {
  var htmlSetup = new XMLHttpRequest();
  // var jsonSetup = new XMLHttpRequest();
  // var xmlSetup = new XMLHttpRequest();
  var country = selectForm.value;


  htmlSetup.onload = function(){
    console.log('htmlsetup.onload structured');
    if(htmlSetup.status === 200) { //will not work locally, only on a server
      // console.log(htmlSetup.responseText);
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
    case 'kenya':
    loadHTML();
    console.log('kenya');
    break;

    case 'italy':
    loadJSON();
    break;

    case 'china':
    loadXML();
    break;

    default:
    console.log('default called');
    break;
  }
}
