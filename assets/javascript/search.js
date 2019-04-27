
var submitButton = $("#submit");
var resultDiv = $("#resultsbox");

var topic = "";
var numberOfArticles = 1;
var startYear = 1900;
var startDate = "";
var endYear = 9999;
var endDate = "";

var apiKey = "7yTLyZQwpepHBSYCnAmwybWzl3NJ53f0";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=" + apiKey; //+ "&begin_date=" + startDate +"&end_date=" + endDate
// Things to accomplish:
submitButton.on("click", function () {
    event.preventDefault(); 
    topic = $("#search-term").val().trim();
    numberOfArticles = $("#records").val();
    startYear = $("#start-year").val();
    startDate = startYear.toString() + "0101"
    endYear = $("#end-year").val();
    endDate = endYear.toString() + "0101"
    callAPI();
})

function callAPI() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (payload) {
        var results = payload.response.docs;
    
        for (var i = 0; i < results.length; i++) {
            var newDiv = $("<div>", { text: "URL" + results[i].web_url + "\nSnippet: " + results[i].snippet + "\nLead Paragraph: " + results[i].lead_paragraph})
            resultDiv.append(newDiv);
        }
    });
}
