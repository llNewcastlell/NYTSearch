//
// function to write HTML to results div
function writeResultsToHTML (prop) {
    $("#results").append("<p>").text(prop);
}
// set values with parameter keys in search object
// var testNewsArticle = {
//     'api-key': "1a68ca123e6d4eceb3b06a7fc9a1a655", 
//     'q': "wyoming",
//     'begin_date': "20170101",
//     'end_date': "20180601",
//     'page': 0
//   }
//
// Built by LucyBot. www.lucybot.com
$("#search").on("click", function () {
    var queryString = $("#search-term").val();
    var startDate = $("#begin-date").val();
    var endDate = $("#end-date").val();
    var numRecs = $("#number-records").val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var testNewsArticle = {
        'api-key': "1a68ca123e6d4eceb3b06a7fc9a1a655", 
        'q': queryString,
        'begin_date': startDate,
        'end_date': endDate,
        'page': numRecs
      }
    url += '?' + $.param(testNewsArticle);
    console.log(url);
    $.ajax({
        url: url,
        method: 'GET',
        }).then(function(result) {
        // console.log(result);
        var headline = result.response.docs["0"].headline.main;
        // console.log(headline);
        writeResultsToHTML(headline);
        }).fail(function(err) {
        throw err;
        });
    });

$("#clear").on("click", function () {
    $("#search-term").val("");
    $("#begin-date").val("");
    $("#end-date").val("");
    $("#number-records").val(null);
});