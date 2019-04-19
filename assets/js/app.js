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

// 4.0 button functionality
//     4.1 button click .empty()'s html gif display area 
//     4.2 button click performs AJAX call on the giphy api
//     4.3 displays 10 gifs to html
//     4.4 each gif will be accompanied by a rating

// 5.0 gif functionality
//     5.1 click on a gif to activiate a gif
//     5.2 click on gif again deactivate giv

// 6.0 

//document.ready

var apiKey = "Ul7ntbONsk4eCTISBH1xjVns9Ng61MN9";