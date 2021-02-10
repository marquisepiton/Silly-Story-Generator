
/* 
THIS IS INITIALIZING VARIABLES AND FUNCTION:
Gives three variables that store references to: 
*/
//"Enter custom name" text field (customName).
// 'customname' name is a Id tags.
const customName = document.getElementById('customname');
//"Generate random story" button (randomize)
// 'randomize' name is a class. 
const randomize = document.querySelector('.randomize');
/*
The <p> element at the bottom of the HTML body that the story will
be copied into (Story)
*/
// 'story' name is a class.
const story = document.querySelector('.story');
//
/*

Definitions: 

            "Const": A variable that is const means the value is immutable or can't be changed when reassignment.   

            "Document": A Document object represents the HTML document that is displayed in that window.
                        The Document object hav various properties that refer to other objects which allow  access
                        to and modification of document content."

            "getElementById": Returns an Element (from html) object representing the element whose id property
                            matches the specified string. 

            "querySelector": returns the first Element within the document that matches the specified selector,
                            or group of selectors. If no matches are found, null is returned.


Thoughts: 
            - (Question About querySelector):   What if you don't want to return the first Element with the same class 
                                                but want to return the second Element with the same class instead?
                                                Answer: 
                                                
                                                - "QuerySelectorAll(): If you need a list of all elements matching the specified selector".
                                                -  Maybe a proper structure of the HTML/CSS file is very important.  

*/
//
//
//Takes an array, and returns one of the items stored inside the array at random.
// "randomValueFromArray" is a function that take a parameter(array) 
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    // return the array that has the "random" value. 
    return array[random];
}
//
/*
Definition:
            "Math.floor()":function returns the largest integer less than or equal to a given number. 
                            Example: Console.log(Math.floor(5.95));
                                     Output: 5 
            "Math.random()":function returns a floating-point, pseudo-random number in the range 0 to to less than 1
                            (inclusive of 0, but not 1).
            "length": return the length of the array.
            "return": returns that value to the user or whoever asked for it.

Thoughts: 
            - Seems like this function is the story chooser or what makes the story picking random. 
*/
//
//
/* Storing text strings inside:
    Variable: "storyText"
    Array: "insetX"
    Array: "insertY"
    Array: "insertZ"
*/
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];




//Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.
// Note: randomize was created at the top of the document. (Line 11)
randomize.addEventListener('click', result);
/*
Definition: 
            "addEventListener": Sets up a function that will be called whenever the specified event is delivered to the target. 

Thoughts: 
            - Why use 'click'? Where is it being called? Why not a different like 'push'?  
*/

function result() {
    //created variable called "newStory"'
    // Note: "storyText" was created on line 76. 
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    //browserType.replace('moz','van');
    /*
    Thoughts: 
            I see that the "randomValueFromArray" sends a random number and "returns" (Line 52) a random phrase from "insert(x/y/z)"
            and stores it into "(xyz)Item".
    */


    /*
    Definition:
                "Replace": Replace the selected string with another string. 
    
    */


    //This methods should replace all the ":insert(x/y/x) with (x/y/z)Items"
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);



    // This if statement replaces "Bob" with whatever the user put in "customName."
    // "customName" is a id in the html file. 
    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }



    if (document.getElementById("uk").checked) {
        //Formulae to convert pounds to stones: lbs / 14
        let weight = Math.round(300 / 14) + ' stone';
        //Formulae to convert (Fs - 32) * 5/9
        let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';


        //Replacing the US measurement text with UK measurements. 
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);


    }
    // Adding the new story content to the story variable
    // Story was called at Line 17.
    story.textContent = newStory;
    story.style.visibility = 'visible';

}