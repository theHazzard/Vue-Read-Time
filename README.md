# Vue-Read-Time
Inspired by Medium.org's 'Read Time', I was inspired to make this mixin for Vue.

By using this, you will get a nice string like `2.50`, `2 Minutes 30 Seconds`, or `2 and a half minutes` printed out, and you can choose what you want to do with it!

This plugin doesn't use arbitrary values, it uses science! 

It takes the average read time from Grade 10 students to College students, based on data from Eye Movements in Reading: Facts and Fallacies - Stanford E. Taylor (1965) and Average Word Length based on data from https://norvig.com/mayzner.html. The only arbitrary value is for image comprehension time, which I assigned to 10 seconds.

# Installation:

Simply run `npm i vue-read-time`

# Using the Plugin:
1. Import the plugin: `import readTime from 'vue-read-time';`
2. Install it: Add `{ mixins: [ readTime ] }` in the component you want to attach the mixin, or globally via: `Vue.mixin(ReadTime);` in your main.js/ts
3. Done!

# Usage

In your components, you can call:
* `this.getReadTimeInSeconds`
* `this.getReadTimeInMinutes`
* `this.getReadTimeInSecondsString`
* `this.getReadTimeInMinutesString`
* `this.getReadTimeString`
* `this.getReadTimeStringAlternate`

# Contributing

Just fork the repository, and create a pull request.

# Credits

Medium.org for inspiration.

# License

GNU GPL v2.0