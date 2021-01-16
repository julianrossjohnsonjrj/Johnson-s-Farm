/* Selecting elements with jquery. First property of method gets value of it
and second changes the property to that value */

$("h1").css("font-size", "5rem");

$("button");

/* Adding a class using jQuery */

$(h1").addClass("big-title margin-50");

/* Changing text using JQuery */

$("h1").text("Bye");

/* Adding Html (All h1's will become "Hey") */

$("h1").html("Hey")

/* Manipulating Attributes */

$("img").attr("src"));

/* Getting and setting Attributes */

$("a").attr("href", "https://google.com");

/* Adding Event listener */

$("h1").click(funcion() {
  $("h1").css("color", "purple")
});

/* For Loop. The for loop for the first code is the same as the second*/

for (var i = 0; i<5; i++ {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
}

$("button".click(function(){
  $("h1").css("color", "purple");
});

/* Show the keys pressed in a input box */

$("input").keypress(function(event) {
  console.log(event);
});

/* Adding and Removing elements */

$("h1").before("<button>New</button>");

$("h1").remove();

or before, after, prepend, append

/* Toggling (showing and hiding) */

$("button").on("click", function(){
  $("h1").hide("color", "purple");
});

$("button").on("click", function(){
  $("h1").animate({margin: "20%"});
});

.show .toggle .fadeOut .fadeIn .fadeToggle .slideUp .slideDown. slideToggle
.animate





/* Command Line */

pwd = print working directory (folder that we are in)

cd = change directory

ls = list files in folder

mkdir = make directory

touch = make new file

node = use node

clear = clear console


/* Node */

// Find module
const fs = require("fs");

// Copy File
fs.copyFileSync("file1.txt", "file2.txt");


app.get("/", function(req ,res){
  res.sendFile(_dirname + "index.html");
});

// __dirname is the directory name


// body parser sends informatio recieved from site to Html

npm install body-parser

// create const for bodyParser
const bodyParser = require("body-parser");

// Pass data from html form extended: true is required and allows us to post objects
app.use(bodyParser.urlencoded({extended: true}))

// Javascript objects
const weatherData = JSON.parse(data)

// Taking keys and packing them up

JSON.stringify

// Log status urlencoded

app.get("/", function(req, res){
  const url = "API"

  https.get(url, function(response){
    console.log(response.statusCode);

// Access some weatherData
  response.on("data", function(data{
    console.log(data);
  })
})

// or collapse object into stringify

const object = {
  name: "Angela",
  favoriteFood: "Ramen"
}
console.log(JSON.stringify(object)

//Tapping into Objects

https.get(url, function(response) {
  console.log(response);

  response.on("data", function(data){
    console.log(data)
    const weatherData = JSON.parse(data)
    const temp = weatherData.main.temp
    const weatherDescription = weatherData.weather[0].description
    console.log(weatherDescription);

// Only one res.send can be use. Instead use res.write


  //Getting an image

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Prince George&appid=22c053fe3aa31bd6397ffd8494dfbf39&units=metric"

  https.get(url, function(response) {
    console.log(response);

    response.on("data", function(data){
      console.log(data)
      const weatherData = JSON.parse(data)
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + ".png"
      res.write("<img src=" + imageURL +">");
      res.send();

      // Use Body Parser to get text user requested

    npm i body-parser
    const bodyParser = require("body-parser");

    app.use(bodyParser.urlencoded({extended: true}));

// To use Static images and files on our local server

app.use(express.static("public"));

// check version of something
-- version (node --version)

// Using Heroku

Download heroku. Log out of terminal and go back in.
$ heroku login

// prepare the app

Change app.listen port 3000 to process.env.PORT
This is a dynamic port that will allow us to work with heroku servers


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});

The || 3000 is or localhost 3000

// Set a Procfile

Hyper terminal go to folder location and type touch Procfile

git init

git add .

git commit -m

heroku create

 //  push local version stored with git to herok
git push heroku master


//github

git init

git add

git commit

git log

git remote add origin

// To use ejs we need to install

Hyper
npim i ejs


// for app.js
app.js

app.use("view engine", "ejs");

create a views folder to use ejs, and create and index.ejs file within folder.

res.render("list", {kindOfDay: day});

// for index.ejs

<%= %>

// Scriptlet tag is for ejs file. Must be put around any javascript within the file.
<%   %>
