
var submitButton = $("#submit");

var topic = "Trump";
var apiKey = "7yTLyZQwpepHBSYCnAmwybWzl3NJ53f0";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=" + apiKey;
// Things to accomplish:
$("#submit").on("click", function () {
    event.preventDefault(); 
    callAPI();
})

function callAPI() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (payload) {
        var results = payload.response.docs;
    
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].web_url);
            console.log(results[i].snippet);
            console.log(results[i].lead_paragraph);
        }
    });
}
