//This variable is used to update the content of the "display" div.
let display = document.getElementById('display');

//This creates an array containing all the buttons in the "index.html" file.
let buttons = Array.from(document.getElementsByClassName('button'));

/**
 * This map function applies an "addEventListener" function to each element of the "buttons" collection.
 */
buttons.map(button => {
    //This adds an EventListener to each of the elements (buttons) of the "buttons" array. 
    button.addEventListener('click', (e) => {
        //This takes the inner text (the content) of the button pressed by the user and...
        switch (e.target.innerText) {
            //If the pressed button is the "C" button...
            case 'C':
                //The "display" div is emptied.
                display.innerText = '';
                //And then the function stops.
                break;
            //If the pressed button is the "=" button...
            case '=':
                //The content previosuly added is evaluated (added, subtracted, multiplied or divided depending on the operator 
                //introduced by the user). The eval() function evaluates the introduced content as JavaScript code and executes it.                                                   
                try {
                    display.innerText = eval(display.innerText);
                //If the user types in invalid mathematic operations, "Error" will be displayed in the "display" div.
                } catch {
                    display.innerText = "Error";
                }
                //And then the function stops.
                break;
            //If the pressed button is the "←" button...
            case '←':
                if (display.innerText) {
                    //The last character of the "display" string is removed. But only IF there is already something in the "display" div.
                    display.innerText = display.innerText.slice(0, -1);
                }
                //And then the function stops.
                break;
            //Adds by default the inner text of the button (its content) to the inner content of the "display" div.
            default:
                display.innerText += e.target.innerText;
        }
    });
});