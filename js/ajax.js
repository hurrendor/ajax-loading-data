// /****Base Request Example****/
// var xhr = new XMLHttpRequest();
// xhr.onload = function(
//   if(xhr.status === 200) { //test for an OK from the server
//     document.getElementById('content').innerHTML = xhr.responseText;
//   }
// );
// xhr.open('GET', 'data/data.html', true);//set up the request
// xhr.send(null);//send the request to the server





/****Loading HTML Example****/

var selectForm = document.getElementById('dropdown');

function loadData() {
  var htmlSetup = new XMLHttpRequest();
  var dataType = selectForm.value;
  console.log(dataType);

  htmlSetup.onload = function(){
    console.log('htmlsetup.onload structured');
    if(htmlSetup.status === 200) { //will not work locally, only on a server
      document.getElementById('main').innerHTML = htmlSetup.responseText;
    }
    console.log('initialized');
  };

  // switch statement
  switch(dataType) {
    case 'html':
    dataToLoad = 'data/data.html'
    break;

    case 'json':
    dataToLoad = 'data/data.json'
    break;

    case 'xml':
    dataToLoad = 'data/data.xml'
    break;

    default:
    break;
  }

  console.log(dataToLoad);
  htmlSetup.open('GET', dataToLoad, true);
  htmlSetup.send(null);
};

  // console.log('htmlLoad init');

/****Loading XML Example****/
// var xmlLoad = new XMLHttpRequest();
//
// xmlLoad.onload = function(
  //   if(xmlLoad.status === 200) {
    //     document.getElementById('main').innerHTML = xmlLoad.responseText;
    //   }
    // );
    //
    // xmlLoad.open('GET', 'data/mapData.xml', true);
    //
    // xmlLoad.send(null);

/****Loading JSON Example****/
// var jsonLoad = new XMLHttpRequest();
//
// jsonLoad.onload = function(
//   if(jsonLoad.status === 200) {
//     document.getElementById('content').innerHTML = jsonLoad.responseText;
//   }
// );
//
// jsonLoad.open('GET', 'data/data.html', true);
//
// jsonLoad.send(null);
