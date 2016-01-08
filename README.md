# emailColor
A converter that takes in a color represented in rgb, hex or through one of the color string names and outputs the color in hexadecimal format.

Import using the CommonJS (browserify) or ES6 modules syntax for client side use.
Simly call the imported value like this:
````
import rgbToHex from 'emailColor'

emailColor('rgb(255, 255, 255)'); // #ffffff
````

This little function was created because if you request the style.color property (or any other color property like backgroundColor, borderColor etc.) of any DOM element the browser will return either the value in RGB format or the name of the color depending on how it was assigned.

Try it yourself on your browser console:
````
document.body.style.backgroundColor = '#000000';
console.log(document.body.style.backgroundColor); //rgb(0, 0, 0)

document.body.style.backgroundColor = '#FFFFff';
console.log(document.body.style.backgroundColor); //rgb(255, 255, 255)

document.body.style.backgroundColor = 'rgb(255, 0, 0)';
console.log(document.body.style.backgroundColor); //rgb(255, 0, 0)

document.body.style.backgroundColor = 'yellow';
console.log(document.body.style.backgroundColor); //yellow
````

This little converter function takes as input a string that represents a DOM element's color in either rgb, color name or hexacedimal format, and it outputs either the hexadecimal equivalent of the given RGB or the original string if it was a 
hex or a color name.

To run the tests perform an 'npm install' and then call 'npm test' on your terminal or command prompt.