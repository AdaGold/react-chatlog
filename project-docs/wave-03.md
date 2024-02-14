# Wave 03: Event Handling and Lifting Up State

**Learn Topics: State and Event Handling & Lifting Up State required for this wave**

In this wave we will update the components to manage a **like** feature. 

- Add behavior to heart button in `ChatEntry` so that when it is clicked it toggles from an empty heart (🤍) to a filled heart (❤️) and from a filled heart (❤️) to an empty heart (🤍).
- Manage the click event and state of the chat entries such that when the like status of a chat message changes by clicking the heart button, it is tracked by the `App` and the `App` reports the number of total messages that are currently liked.
    - Example: If the user has liked three messages, `3 ❤️s` will appear at the top of the screen. If one of the three liked messages is unliked then `2 ❤️s` will appear at the top of the screen.

<details>
    <summary>Expand to see hints for implementing this feature</summary>

- We will now need to update the `ChatEntry` component to use the `liked` field.
- When we click a heart, the state of the `entries` will need to update in our `App` so that it can report the number of likes (❤️s). 
- Consider implementing a helper function to calculate the number of likes (❤️s).
- Consider using a ternary to display a 🤍 or a ❤️ as needed.
</details>

## Tests

The tests for this component are integration tests. They don't make assumptions about the implementation details of like feature. The tests verify the following functionality:
- When the user click on a 🤍 button it changes to a ❤️, and when the user clicks on a ❤️ it changes to a 🤍. This test also verifies that clicking on one `ChatEntry`'s like button (🤍) doesn't change other `ChatEntry`'s buttons. 
- The correct number of filled hearts is displayed at the top of the screen.
- If you make a design decision to use a different emoji, you will need to change the tests accordingly.
