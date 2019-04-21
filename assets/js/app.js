// Psuedo Code
// 1.0 Determine basic layout of HTML
//     1.1 Divide layout using CSS/Bootstsrap, using colum/rows
//     1.2 create id's & Classes to organize where buttons & gifs are to go
//     1.2 create form for user input (click event)

// 2.0 create api key 
//     2.1 research GIPHY API search parameters
//     2.2 API query to use HTTPS
//     2.3 hard code API query & AJAX call to test functionality

// 3.0 User input to creates buttons
//     3.1 var gifArray =[]; user input .val() to be .push()'d to array
//     3.2 for loop gifArray to create buttons
//     3.3 buttons .appended to top of the HTML (based on the HTML Layout)
//     3.4 on submit, clear input field !need some assistance on this

// 4.0 button functionality
//     4.1 button click .empty()'s html gif display area 
//     4.2 button click performs AJAX call on the giphy api
//     4.3 displays 10 gifs to html
//     4.4 each gif will be accompanied by a rating

// 5.0 gif functionality
//     5.1 click on a gif to activiate a gif
//     5.2 click on gif again deactivate giv

//document.ready function
$(document).ready(function () {
});

var gifArray = ["slayer", "judas priest", "thrash metal", "death metal"];

$('#addGif').on("click", function (event) {
    event.preventDefault();
    // console.log(this)

    var input = $('#gifInput').val().trim();
    // console.log(input)

    gifArray.push(input);
    // console.log(gifArray)

    generateButtons();

    $('#gifInput').val("");

});

function generateButtons() {
    $('#gifButtons').empty();

    for (var i = 0; i < gifArray.length; i++) {
        var button = $('<button>').text(gifArray[i]).attr("data-gif", gifArray[i]);
        button.attr("class", "gif");
        $('#gifButtons').append(button);
    }
}
// button makes ajax call
//use document.on to call on elements created by javascript
$(document).on("click", ".gif", function () {
    // clear gif area
    $('#gifView').empty();

    var input = $(this).attr("data-gif")
    // console.log(input)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        input + "&api_key=Ul7ntbONsk4eCTISBH1xjVns9Ng61MN9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.data)
        var gifData = response.data;

        for (var i = 0; i < gifData.length; i++) {
            var gifView = $('<div>');
            gifView.attr("class", "float-left")
            var rating = gifData[i].rating;
            // console.log(rating)

            var p = $("<p>").text("Gif Rating: " + rating);
            var gifImage = $("<img>");
            //set up gif attribute state parameter - still/animate
            gifImage.attr({
                "class": "gifState",
                "src": gifData[i].images.fixed_height_still.url,
                "data-animate": gifData[i].images.fixed_height.url,
                "data-still": gifData[i].images.fixed_height_still.url,
                "data-state": "still"
            });

            gifView.prepend(p);
            gifView.prepend(gifImage);
            $('#gifView').append(gifView);
        }
    });
});

$(document).on("click", ".gifState", function () {
    var state = $(this).attr("data-state");
    console.log(state);
    //"topsy-turvy"
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "animate")
    } else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});

generateButtons();

