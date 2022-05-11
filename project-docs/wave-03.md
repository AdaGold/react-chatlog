# Wave 03: Event Handling and Lifting Up State

In this wave we will update to components to manage liking 

- Add behavior to heart button in `ChatEntry` so that when it is clicked it toggles from an empty heart to a filled heart and from a filled heart to and empty heart.
- Manage the click event and state of the chat messages such that when the like status of a chat message changes by clicking the heart button, it is tracked by the `App` such that the `App` reports the number of total messages that have been liked.


<details>
    <summary>Hints</summary>

- Note the class names in `ChatEntry.css` that are used to render a filled and unfilled heart
- Consider writing a helper function in `App` to calculate the number of filled heart

</details>
