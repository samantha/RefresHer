/** Get DOM Elements */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

/**
 * Pomodoro
 */

// // update countdown(every 1 second)
// var interval = setInterval(function(){
//   var now =
// }

// Alert user that it's breaktime
function breakTime(){
  alert("Breaktime!");
}


/** Dog API */
// access root div
const app = document.getElementById('root')

// create image element for logo
const logo = document.createElement('img');
logo.src = 'dist/img/logo.png';
logo.setAttribute("height", "100px");

// create div and set class attribute to container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// place logo and container in website
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
request.onload = function () {
  var imageLink = document.createElement('img')

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    imageLink = data.message;
    console.log(imageLink);
    var link = document.createElement('a');
    var elem = document.createElement("img");
    link.setAttribute("href", imageLink);
    elem.setAttribute("src", imageLink);
    elem.setAttribute("height", "250px");
    link.appendChild(elem);  //<----
    app.appendChild(link);
  } else {
    console.log('error');
  }
}

request.send();

