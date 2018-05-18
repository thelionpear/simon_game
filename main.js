
// $(".game_button").light_up(function(button_name) {
//     $(".button_name").removeClass("opacity");
//     $(".button_name").addClass("not_opaque"); 
// });

//need a function that lights up the buttons 
function lightUp(button_name) {
    $(button_name).removeClass("opacity");
    $(button_name).addClass("not_opaque"); 
}
//function that turns off the buttons 
function lightOff(button_name) {
    $(button_name).removeClass("not_opaque");
    $(button_name).addClass("opacity"); 
}
//generates the computer's color array 
var array_colors = ["red", "blue", "yellow", "green"]
var computer_array = []


function computer_array() {
    var random_number = Math.floor(Math.random() * array_colors.count)
    var computer_choice = array_colors[random_number] 
    computer_array.push(computer_choice) 
}

//lights up buttons based on the computer array


function play_game() {
    foreach(color, computer_array)
    switch(color) {
        case "red": 
        lightUp("red_button")
        case "blue": 
        lightUp("blue_button")
        case "yellow":
        lightUp("yellow_button")
        case "green": 
        lightUp("green_button")
    } 
}
//adds one to the computer array each time 

//takes what the user does into an array 
var user_array = []

function user_choice() {
    $("#.red_button").onClick(function {
        var choice = "red" 
    })
}

function user_array_choice() {
    switch(choice)
    case ()
}
//let's the user submit their choices 

//compares what the computer did and what the user did 

//takes the comparison and displays if you got it or not 

//tracks a user and their high score 

// var colors = ['.red_button', '.blue_button', '.yellow_button', '.green_button']
// colors.forEach( function(color) {
//     setTimeout( function() {
//       suspense(color);
//     }, 1000)
// })

// function suspense(color) {
//     setTimeout( function() {
//       lightUp(color)
//     }, 1000)
// }

lightUp(".red_button")