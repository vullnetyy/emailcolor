# emailcolor
A converter that takes in a color represented in rgb, hex or through one of the color string names and outputs the color in hexadecimal format.

This little function was created because if you request the style.color property (or any other color property) of any dom element the browser will return either the value in RGB format or the name of the color depending on how it was assigned.

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
