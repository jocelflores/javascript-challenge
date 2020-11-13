# javascript-challenge

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](UFO-level-1/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

### Level 1: Automatic Table and Date Search (Required)

* Create a basic HTML web page. My version is included here: [index.html](UFO-level-1/index.html).

* A gif of the site is also included if you want to see it in action! [screen-capture.gif](UFO-level-1/screen-capture.gif)

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

* Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

- - -

### Dataset

* [UFO Sightings Data](UFO-level-1/static/js/data.js)

- - -

**Good luck!**

- - -


### Spoilers below, only read if you would like a hint or are stuck:
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

The steps contained the code are as follows:

- Render the entire data set from the given external file
- Add an event listener to recognize the user input
- Use the user input to loop through the data and append the matching entries to a new list
- Render the filtered entries to a new table
- Clear the existing tables before rendering a new filtered table

