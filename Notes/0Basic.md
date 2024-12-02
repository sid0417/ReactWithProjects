# 1. React is a JavaScript library to build dynamic and interactive user interfaces.
# 2. Developed at facebook in 2011
# 3. Currently most used Js library for frontend 
# 4. Used to create single page application (page does not reload)
  
  `Document Object Model (DOM)`

# The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a web page, allowing programs to interact with the content, structure, and style of the page. The DOM treats the entire page as a tree of objects, where each element (like <div>, <p>, <h1>, etc.) is an object, and each object can have properties, methods, and events associated with it.

Key Points About the DOM:
# Tree Structure: The DOM represents the HTML or XML document as a tree structure. Each node in the tree is an object representing a part of the document.

For example:
The <html> element is the root node.
The <head> and <body> are child nodes of <html>.
Tags like <h1>, <p>, <img>, etc., are further nested nodes under the <body> tag.
Dynamic Interaction: Through JavaScript, you can manipulate the DOM in real-time. This means you can modify the content, structure, or style of the page dynamically. For example:

Adding, removing, or updating elements.
Changing styles or attributes of elements.
Responding to user interactions (like clicks or form submissions).

# DOM Methods: Some common methods used to interact with the DOM:
getElementById(): Selects an element by its id.
getElementsByClassName(): Selects elements by their class name.
querySelector(): Selects the first element that matches a given CSS selector.
createElement(): Creates a new element.
appendChild(): Adds a new child element to a parent element.

# Events: You can listen for and handle events such as clicks, mouse movements, key presses, and more:
Example: element.addEventListener('click', function() { /* handle click */ });
Example:
Here’s a simple example of how you might use JavaScript to interact with the DOM:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <h1 id="greeting">Hello, World!</h1>
    <button id="changeTextBtn">Change Text</button>

    <script>
        // Get the button and h1 elements
        const button = document.getElementById('changeTextBtn');
        const greeting = document.getElementById('greeting');

        // Add event listener to the button
        button.addEventListener('click', function() {
            greeting.textContent = 'Hello, DOM!';
        });
    </script>
</body>
</html>
Breakdown:
HTML Structure: It has a <h1> element with the text "Hello, World!" and a <button> that says "Change Text".
JavaScript:
The getElementById() method selects both the button and the <h1>.
The addEventListener() method is used to listen for a click event on the button. When clicked, the text of the <h1> element is updated to "Hello, DOM!".
This is a basic interaction with the DOM, where you're manipulating the content of a webpage dynamically using JavaScript.

 `Problems with Javascript`
1. React has a simpler mental model
2. JS is cumbersome
3. JS is Error-prone
4. JS is Hard to maintain 

 `Working of React`
1. No need to worry about querying and updating DOM elements.
2. React creates a web page with small and reusable components
3. React will take care of creating and updating DOM elements.
4. IT saves a lot of time, cheezein aasan hai, pahele se likhi hui hain

 `JS Vs React`
1. JS is imperative: You define steps to reach your desired state.
2. React is Declarative: You define the target UI state and then react figures out how to reach that state. 