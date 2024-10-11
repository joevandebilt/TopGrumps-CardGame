var APIHandler = (function($) {

  function sendRequestToAPI(area, action, payload)
  {
      if (payload === undefined) {
        payload = null;
      }

      //startRequestOverlay();
      return new Promise((resolve, reject) => {  
      $.ajax({
          url: apiEndpoint,
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({
              "Area": area,
              "Action": action,
              //"SessionID": localStorage.getItem('SessionID'),
              "Payload": payload,
              //"RecpatchaToken": token
          }),
          success: function(data) {
              resolve(data);
              //endRequestOverlay();
          },
          error: function(data) {
              reject(data);
              //endRequestOverlay();
          }
      });
    });
  }

  function startRequestOverlay() {
      $("#loader-overlay").removeClass("hidden");
  }

  function endRequestOverlay() {
      $("#loader-overlay").addClass("hidden");
  }

  return {
      Send: function(area, action, payload) {
          return sendRequestToAPI(area, action, payload);
      }
  }

})(jQuery);