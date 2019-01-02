var responseObject;

function loadJSON() {
  var jsonSetup = new XMLHttpRequest();
  jsonSetup.onload = function() {
    if(jsonSetup.status === 200) {;
      responseObject = JSON.parse(jsonSetup.responseText);
      // console.log(jsonSetup.responseText);
      // responseObject = (jsonSetup.responseText[i]).toString();

      var newContent = '';
      // for (var i = 0; i < responseObject.country.length; i++) {
      for ( i in responseObject.country) {
        console.log(responseObject.country[i]);
        newContent += '<article>';
        for ( l in responseObject.country[i].location){
          newContent += '<h3>' + responseObject.country[i].location[l].name + '</h3>';
          newContent += '<p>' + responseObject.country[i].location[l].description + '</p>';
        }
        newContent += '</article>';
      }

      document.getElementById('main').innerHTML = newContent;
    }
  }
  jsonSetup.open('GET', 'data/data.json', true);
  jsonSetup.send(null);
};

function loadXML() {
  var xmlSetup = new XMLHttpRequest();
  xmlSetup.onload = function() {
    if(xmlSetup.status === 200) {
      console.log(xmlSetup.responseText);
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
