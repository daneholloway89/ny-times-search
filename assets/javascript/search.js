
var topic = "Trump";
var apiKey="7yTLyZQwpepHBSYCnAmwybWzl3NJ53f0";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +"&api-key=" + apiKey;
// Things to accomplish:
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});