
// $(".game_button").light_up(function(button_name) {
//     $(".button_name").removeClass("opacity");
//     $(".button_name").addClass("not_opaque"); 
// });


$(document).ready( function() {

    var arrayColors = ["red", "blue", "yellow", "green"];
    var computerArray = [];
    addEventsToButtons();
    addToComputerArray();
//need a function that lights up the buttons 
    
    //function that turns off the buttons 
   
    //generates the computer's color array 
    
   


    function addToComputerArray() {
        var randomColor = arrayColors[Math.floor(Math.random() * arrayColors.length)];
        computerArray.push(randomColor); 
        playGame(); 
    }

    //lights up buttons based on the computer array


    function playGame() {
        var time = 0;
        computerArray.forEach(function (color) {
            setTimeout(function() { 
                switch(color) {
                    case "red": 
                    lightUp("red_button");
                    break;
                    case "blue": 
                    lightUp("blue_button");
                    break;
                    case "yellow":
                    lightUp("yellow_button");
                    break; 
                    case "green": 
                    lightUp("green_button");
                    break; 
                }
            }, time);
            time += 1000;  
        })
    }

    function lightUp(buttonName) {
        $("." + buttonName).removeClass("opacity");
        $("." + buttonName).addClass("notOpaque");
        //lightOff(buttonName)
        //setTimeout(lightOff, 5000)
        setTimeout(function() { 
            lightOff(buttonName); 
        }, 1000);
    }

   

    function lightOff(buttonName) {
        $("." + buttonName).removeClass("notOpaque");
        $("." + buttonName).addClass("opacity"); 
    }    
    //adds one to the computer array each time 

    //takes what the user does into an array 
    var userArray = []

    function addEventsToButtons() {
        $(".red_button").click(function() {
            var colorChoice = $(this).attr("id");
            lightUp("red_button");
            createUserArray(colorChoice); 
        });
        $(".yellow_button").click(function() {
            var colorChoice = $(this).attr("id");
            lightUp("yellow_button");
            createUserArray(colorChoice); 
        });
        $(".blue_button").click(function(){
            var colorChoice = $(this).attr("id");
            lightUp("blue_button");
            createUserArray(colorChoice); 
        });
        $(".green_button").click(function() {
            var colorChoice = $(this).attr("id");
            createUserArray(colorChoice); 
            lightUp("green_button");
        })
        
    }

    function createUserArray(choice) {
        switch(choice) {
        case "red": 
        userArray.push("red");
        break; 
        case "yellow": 
        userArray.push("yellow")
        break; 
        case "blue": 
        userArray.push("blue")
        break; 
        case "green":
        userArray.push("green");
        break; 
        }
        userComputerCompare() 
    }
//let's the user submit their choices 

//compares what the computer did and what the user did 
    function userComputerCompare() {
        var i 
        var inputCorrect = true 
        for (i = 0; i < userArray.length; i++) {
            if (userArray[i] != computerArray[i]) {
                inputCorrect = false 
                alert("You got it wrong")
                break 
            }
        }
    //this part of the function checks if the user has not only entered a correct answer
    //but entered as many correct answers as are in the computer array
        if (inputCorrect) {
            if (userArray.length == computerArray.length) {
                userArray = [] 
                addToComputerArray() 
            }
        }
    }

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
})