
var submitButton = $("#submit");

var topic = "";
var numberOfArticles = 1;
var startYear = 1900;
var endYear = 9999;

var apiKey = "7yTLyZQwpepHBSYCnAmwybWzl3NJ53f0";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=" + apiKey;
// Things to accomplish:
submitButton.on("click", function () {
    event.preventDefault(); 
    topic = $("#search-term").val().trim();
    numberOfArticles = $("#records").val();
    startYear = $("#start-year").val();
    endYear = $("#end-year").val();
    console.log(topic);
    console.log(numberOfArticles);
    console.log(startYear);
    console.log(endYear);
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
