## Baseline

Examine the JSON file located at `src/data/messages.json` to familiarize yourself with the data you will be using.

What properties comprise an individual chat message? What are their data types? How are the chat messages organized? Are they sorted in a particular way?

After considering the data, you should begin to explore how React components might be used to transform that data into a static chat log web page. Specifically, what components will be needed? Are any of the components nested within another component? Are there any components which appear on the page multiple times?

Next, link the data to the components. Take a look at the JSON file again. Each piece of data (e.g. a string or date) will be used through the `props` for a particular component, so try to match the correct component for every piece of data in the JSON file. Keep in mind that components can use multiple pieces of data.

Once you've identified which data will be used by which components, consider the structure of the data. Which pieces of data are grouped together into data structures? This is often a sign that those pieces of data will be used by the same component. Are there any nested data structures? This is usually a sign that components should be nested as well, with the more deeply nested components using the more deeply nested data.

Finally, after analyzing the provided data and designing a set of components and their relationships to the data, you should write down your proposed design and discuss it with your chair pair. Is their design different from yours? If so, discuss the reasoning for each of yours designs and determine any possible pros/cons for both approaches.

At the end we will discuss the design choices as a whole class.

## Setup

After forking and cloning this repo you must run `npm install` in the project directory. This will download and install all of the necessary NPM modules required by the project. After that finishes successfully you can run `npm start` to begin the local development server.

## Tests