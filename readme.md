# Backbone Panels (0.1.0)

A basic [Backbone](http://backbonejs.org) panel manager. Allows you to create static panels in the DOM and has a nice API for adding, removing and replacing the content of these panels with Backbone views. This is currently packaged as an AMD module. If you want support outside of AMD, please open an issue and request it, or send a pull request.

[![Build Status](https://travis-ci.org/phawk/Backbone-Panels.png?branch=master)](https://travis-ci.org/phawk/Backbone-Panels)

### Dependencies

* [Require JS](http://requirejs.org/)
* [jQuery](http://jquery.com/)
* [Backbone](http://documentcloud.github.com/backbone/)
* [Underscore](http://documentcloud.github.com/underscore/)

* * *

# Usage

```js
define(["backbone-panels"], function(panels) {
    var opts = {
        el: $("body"), // Any jQuery selector, if not passed it, it will use an in memory `<dib>`.
        className: "custom-class", // (Optional) Defaults to ".backbone-panel"
    };

    var panel = panels.create(opts);

    // Adding some views
    panel.add({
        "header": my_header_view,
        "content": homepage_view,
        "footer": my_footer_view
    });

    // Replace a view
    panel.replace("content", about_view);
});
```

* * *

# MIT License

Copyright (C) 2013 Pete Hawkins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
