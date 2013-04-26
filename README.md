$.preRoll
=======

jQuery plugin that allows you to do a JavaScript based PreRoll on embedded videos.

Usage:
------------
```html
<script src="preroll.min.js"></script>
<script>
$('#player').preRoll({
  timer: 15,
  pre: '<img src="http://placehold.it/500x400" />',
  post: '<iframe width="500" height="400" src="http://www.youtube.com/embed/4Ti70Uidal4"></iframe>'
});
</script>
<div id="#player">Your video will play in [x] seconds.</div>
```
Options:
------------
`timer`: (optional) This tells the plugin how long to show the `pre` code with the timer message. This is overwriteable by setting your time in the html yourself for example:

```html
<div id="#player">Your video will play in [15] seconds.</div>
```

`pre`: HTML you want to be displayed under the timer message while it's counting down.

`post`: HTML of what you want displayed after the timer has ended, usually either a video object or an embed iframe.

Demo:
------------
You can see a demo of this on [jsFiddle](http://jsfiddle.net/299uW/)

Extras:
------------
You can also style the div the timer message is displayed in by styling `div#preRoll_timer`