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

var timeInMinutes = 0.5;
var currentTime = Date.parse(new Date());
var timeUp = new Date(currentTime + timeInMinutes * 60 * 1000);

function time_remaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  console.log(hours + minutes + seconds);
  return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

function run_clock(id,endtime){
  var clock = document.getElementById(id);
  function update_clock(){
    var t = time_remaining(endtime);
    clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
    if(t.total<=0){ clearInterval(timeinterval); }
  }
  update_clock(); // run function once at first to avoid delay
  var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv', timeUp);

// Alert user that it's breaktime
// function breakTime(){
//   alert("Breaktime!");
// }


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


/** Dog API */
// access root div

// $.ajax({
//     url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//     dataType: 'JSONP',
//     jsonpCallback: 'callbackFnc',
//     type: 'GET',
//     async: false,
//     crossDomain: true,
//     success: function(results){
//         var title = results.response.title;
//         var numTweets = results.response.content;
//         $('#results').append(title + ' said ' + content);
//     }
// });

// $.ajax({
//   type: "POST",
//   url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?",
//   dataType: 'jsonp',
//   headers: {'Access-Control-Allow-Origin': 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'},
//   success: function(results){
//     var title = results.response.title;
//     var numTweets = results.response.content;
//     $('#results').append(title + ' said ' + content);
//   },
//   error: function(xhr, ajaxOptions, thrownError) {
//      alert("Failed to cancel subscription! Message:" + xhr.statusText);
//   }
// });