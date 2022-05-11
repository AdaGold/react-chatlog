# Wave 03: Event Handling and Lifting Up State - Likes

Add behavior to heart button in `ChatEntry` so that when it is clicked it toggles from an empty heart to a filled heart and from a filled heart to and empty heart.

Manage the click event and state of the ChatMessages such that when the like status of a chat message changes, it is tracked by the App such that the App report the number of total messages that have been liked.

### Hints

- Note the class names in `ChatEntry.css` that are used to render a filled and unfilled heart
- Consider writing a helper function in `App` to calculate the number of filled heart


