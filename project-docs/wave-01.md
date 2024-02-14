# Wave 01: Presentational Component

**Learn Topics: React Components and Props required for this wave**

Update the `ChatEntry` and `App` components to display a single chat message bubble with the message text and relative timestamp, plus the sender's name above it.  

A good way to test this code as you write it would be to take the first chat message from the JSON data file and use it as the data for the `ChatEntry` component.

`ChatEntry` should have props which match the elements from each chat message in the JSON data file: `sender`, `body`,  and `timeStamp`. Note: We do not need to include the `id` and `liked` fields for Wave 01. Additionally, you do not need to consturct your own `timeStamp`. Please refer to the [setup docs](./setup.md#hint-the-timestamp-component) about how to implement the `timeStamp` already provided.

## Styling

The styles necessary to make an app which visually matches the demo above have been provided for you, but you will need to make use of them in your React components by adding classes to specific HTML elements in your JSX.

There are several CSS classes for the different elements of a chat message. You should attempt to determine which classes should be applied to which HTML elements yourself. However, if you are stuck on this, please reach out for help as the styling is not the primary learning goal of this project.

Usually our convention for styles in React applications is to have a separate CSS file for every component. 

**NOTE**: Unless you are working on the optional enhancement, make sure that your chat message's container element has both the classes "chat-entry" and "local".

## Tests

This component has a set of tests that ensure that props passed to the component appear in the browser. To pass the tests, the component must be named `ChatEntry` with props `sender`, `body`,  and `timeStamp`.
