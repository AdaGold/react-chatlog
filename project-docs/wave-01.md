# Wave 1
For wave 1 implement the component(s) necessary to display a single chat message bubble with the message text and relative timestamp, plus the sender's name above it.  

A good way to test this code as you write it would be to take the first chat message from the JSON data file and use it as the data for the component(s) you are implementing.

## Tests

This component has a set of tests that ensure that props passed to the component appear in the browser.  To pass the tests you should name this component **ChatEntry** and give it props which match, (including the name of the props) the elements from each chat message in the JSON data file.  Otherwise the tests will not pass.  Alternatively you can adjust the tests to use the proper props.

## Styling
The styles necessary to make an app which visually matches the demo above have been provided for you, but you will need to make use of them in your React components by adding classes to specific HTML elements in your JSX.

There are several CSS classes for the different elements of a chat message. You should attempt to determine which classes should be applied to which HTML elements, however if you are stuck on this please ask a member of the instructional staff as the styling on this project is not the learning goal.

Usually our convention for styles in React applications is to have a separate CSS file for every component (refer to the scaffold for React Timeline as an example). 

**NOTE**: Unless you are working on the optional enhancement, make sure that your chat message's container element has both the classes "chat-entry" and "local".