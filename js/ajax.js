// /****Base Request Example****/
// var xhr = new XMLHttpRequest();
// xhr.onload = function(
//   if(xhr.status === 200) { //test for an OK from the server
//     document.getElementById('content').innerHTML = xhr.responseText;
//   }
// );
// xhr.open('GET', 'data/data.html', true);//set up the request
// xhr.send(null);//send the request to the server


/****Loading XML Example****/
var xmlLoad = new XMLHttpRequest();

xmlLoad.onload = function(
  if(xmlLoad.status === 200) {
    document.getElementById('main').innerHTML = xmlLoad.responseText;
  }
);

xmlLoad.open('GET', 'data/mapData.xml', true);

xmlLoad.send(null);



/****Loading HTML Example****/
// var htmlLoad = new XMLHttpRequest();
//
// htmlLoad.onload = function(
//   if(htmlLoad.status === 200) {
//     document.getElementById('content').innerHTML = htmlLoad.responseText;
//   }
// );
//
// htmlLoad.open('GET', 'data/data.html', true);
//
// htmlLoad.send(null);


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
