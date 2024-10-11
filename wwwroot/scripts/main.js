//Endpoints
var host = window.location.protocol + "//" + location.host;
var apiEndpoint = host + "/api/index.php";

//Directories
var wwwroot = host + "/wwwroot";
var componentsDirectory = wwwroot + "/components/";
var imageDirectory = wwwroot + "/images/";

//Templates
var cardTemplate;

$(document).ready(function () {
  LoadCardTemplate().then(response => cardTemplate = response);
  LoadHeaderAndFooter();

  var pageName = location.pathname;
  if (pageName === "/") {
    CardHandler.LoadCards();
  }
  else if (pageName === "/game.html") {
    CardHandler.CreateCardGame();
  }
});

function LoadHeaderAndFooter() {
  $.ajax({
    url: componentsDirectory + "header.html",
    type: 'GET',
    data: {},
    success: function (data) {
      $("header").replaceWith(data);
    }
  });
  $.ajax({
    url: componentsDirectory + "footer.html",
    type: 'GET',
    data: {},
    success: function (data) {
      $("footer").replaceWith(data);
    }
  })

}

function LoadCardTemplate() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: componentsDirectory + "card-template.html",
      type: 'GET',
      data: {},
      success: function (data) {
        resolve(data)
      },
      error: function (error) {
        reject(error)
      },
    })
  })
}