/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const color_block = document.getElementById("color-block");
color_block.addEventListener('click', changeColor);
document.getElementById("color-block").style.backgroundColor = 'rgb(240, 128, 128)';


function changeColor(){
    //Write a condition determine what color it should be changed to
    if(document.getElementById("color-block").style.backgroundColor == 'rgb(240, 128, 128)'){
        //change the background color using JS
        document.getElementById("color-block").style.backgroundColor = 'rgb(0, 255, 255)';
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").textContent = '#00FFFF';

    }
    else{
        //change the background color using JS
        document.getElementById("color-block").style.backgroundColor = 'rgb(240, 128, 128)';
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").textContent = '#F08080';
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertbtn = document.getElementById('convertbtn');
convertbtn.addEventListener('click', convertTemp);


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let f_number = document.getElementById("f-input").value;
    let c_number = (f_number - 32) * 5 / 9;

    //Send the calculated temperature to HTML
    document.getElementById('c-output').textContent = c_number;
}


