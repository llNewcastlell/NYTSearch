//
// grab parameter values from html input
var queryString = $("#search-term").val();
var startDate = $("#begin-date").val();
var endDate = $("#end-date").val();
var numRecs = $("#number-records").val();
// set values with parameter keys in search object
var testNewsArticle = {
    'api-key': "1a68ca123e6d4eceb3b06a7fc9a1a655", 
    'q': queryString,
    'begin_date': startDate,
    'end_date': endDate,
    'page': numRecs
  }
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
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(testNewsArticle);
    var nytAPIRequest = function () {
        $.ajax({
            url: url,
            method: 'GET',
            }).done(function(result) {
            console.log(result);
            }).fail(function(err) {
            throw err;
            });
        }
    });

$("#clear").on("click", function () {
    $("#search-term").val("");
    $("#begin-date").val("");
    $("#end-date").val("");
    $("#number-records").val(null);
});

// $("#results").append();