/*Practice - Colored Reindeer
In this exercise, you start with a collection of reindeer names. Your task is to add each reindeer name to an HTML article element with an id of colored-reindeer.

After you read the instructions, your goal is to have three functions.

A generator function to yield colors.
A factory function to build a new reindeer object. This function will need to use the generator.
The main builder function (see below) which will call the factory function and then place each object in an array.
To start you off, paste in the following code into your JavaScript file.

const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    // Write a for loop that looks at each reindeer
        // Invoke factory function to create reindeer object

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array
}
Your job is to...

Create a new object that represents a reindeer - the object will include the reindeer's name and its color. Use a generator function to attach each of the following colors, in order, to the reindeer. Use a factory function to generate the reindeer object.

["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
Place each object in an array named coloredReindeer.

// Each object produced by the factory function
[{ "name": "Dasher", "color": "Blue" }, etc...]
Iterate over the coloredReindeer array and insert a new <section> element in the colored-reindeer element that displays the reindeer name, with a font color corresponding to the color in the object.

<!-- Example of what your HTML should look like -->
<article id="colored-reindeer">
    <section style="color: Blue">Dasher</section>
    <section style="color: Red">Dancer</section>
    etc...
</article>
Pro tip: Remember to make your code modular. The JavaScript for generating the data should be in one file, and the JavaScript for manipulating the DOM should be in a different file.*?
*/


const coloredReindeerBuilder = function () {
    let coloredReindeer = [];

    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    for(let i = 0; i < reindeer.length; i++){  // Write a for loop that looks at each reindeer
        let mkObj = function(name){ // Invoke factory function to create reindeer object
            return Object.create({}, {
                "name": {
                    value: reindeer[i],
                    enumerable: true
                }
            })
        }
        let myObj = mkObj();
        coloredReindeer.push(myObj); // Put new reindeer object in coloredReindeer array
    }
    return coloredReindeer;// Return coloredReindeer array
}

let coloredReindeerArray = coloredReindeerBuilder();

let addColor = function* (){
    let counter = 0;
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    
    while(counter < coloredReindeerArray.length){
        yield colors[counter];
        counter++;
    }
}
let colorFactory = addColor();

console.log(colorFactory);
console.log(colorFactory.next());
console.log(addColor);
console.log(addColor());

for(reindeer in coloredReindeerArray){
    //console.log(addColor().next())
    coloredReindeerArray[reindeer].color = colorFactory.next().value;
}

console.log(coloredReindeerArray)

for (reindeer in coloredReindeerArray){
    let newSection = document.createElement("section");
    newSection.textContent = coloredReindeerArray[reindeer].name;
    newSection.style.color = coloredReindeerArray[reindeer].color;
    document.querySelector("body").appendChild(newSection);
}