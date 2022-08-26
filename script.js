//Getting items

let display = document.querySelector('#display')
//Get all elements that have a class of button
let buttons = Array.from(document.querySelectorAll('.button'))

//Mapping each button element with a click event
buttons.map(button => {
    //'e' is the pointer event
    button.addEventListener('click', (e) => {
        //Finding out who clicked it
        switch(e.target.innerText){
            case 'C': 
                display.innerText = '' 
                break; 
            case '←':
                //Removes last character of display
                display.innerText = display.innerHTML.slice(0, -1)
                break;
            case '=':
                //'eval' basically executes input as javascript code, and since you can put mathemathical functions this will work
                try {
                    //Avoid eval, seriously though, it can be insecure
                display.innerText = eval(display.innerText)

                }
                catch {
                    alert("Error: Invalid operation")
                    display.innerText = ''
                }
                break;
            
            //For most buttons you want the text of the button to be added to the display
            default: 
                display.innerText += e.target.innerText 
        }
            
    })
})
