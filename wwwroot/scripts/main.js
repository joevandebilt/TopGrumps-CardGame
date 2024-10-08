//Endpoints
var host = window.location.protocol + "//" + location.host;
var apiEndpoint = host+"/api/index.php";

//Directories
var wwwroot = host+"/wwwroot";
var componentsDirectory = wwwroot+"/components/";
var imageDirectory =  wwwroot+"/images/";

//Templates
var cardTemplate;

 $(document).ready(function() {
   LoadCardTemplate()
      .then(response => cardTemplate = response)
      .then(LoadCards().then(cards => RenderCards(cards)));
 });

 function RenderCards(response) {   
 
   let cards = response.Payload;
   cards.forEach(card => {
      $card = $(cardTemplate);

      let properties = Object.getOwnPropertyNames(card);
      properties.forEach(property => {
         propValue = card[property].split("\n").join("<br />");
         if (!isNaN(propValue)) {
            propValue = parseFloat(propValue)*1;
         }
         propKey = property.toLowerCase();
         $input = $card.find("[data-id='"+propKey+"']")
         if ($input.length === 1) {
            if (propKey == "image") {
               $input.attr("src", imageDirectory+propValue);
               $input.attr("alt", "Picture of " + card.Name);
            }
            else if (propKey == "episodeurl") {
              $input.attr("href", propValue);
            }
            else {
               $input.html(propValue);
            }
         }
      });

      $(".grump-card-display").append($card);
   });   
 } 

 function LoadCardTemplate() {
   return new Promise((resolve, reject) => {
     $.ajax({
       url: componentsDirectory+"card-template.html",
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

 function LoadCards() {
   return new Promise((resolve, reject) => {
      $.ajax({
        url: apiEndpoint,
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