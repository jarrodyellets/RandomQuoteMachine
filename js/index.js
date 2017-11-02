$(document).ready(function() {
  //Obtain quotes via API
  $("#getQuote").on("click", function() {
    $.getJSON(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      function(json) {
        //Display Quote
        $("#quote")
          .text(json.quoteText)
          .hide()
          .fadeIn();
        //Check if author exists
        if (json.quoteAuthor === "") {
          json.quoteAuthor = "Unknown";
        }
        //Display Author
        $("#author")
          .text("~ " + json.quoteAuthor)
          .hide()
          .delay(600)
          .fadeIn();

        //Adjust Tweet href
        $("#tweet").attr(
          "href",
          "https://twitter.com/home/?status=" +
            '"' +
            json.quoteText +
            '"' +
            "  ~" +
            json.quoteAuthor
        );
      }
    );
  });
});