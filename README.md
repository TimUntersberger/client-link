# client-link

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

Client-link is a simple webcomponent for client side routing. 

The component uses the history api to update the url and dispatches the `pathchanged` event whenever the element is clicked.

It also adds the `active` class to itself when the url matches the path specified.


## Installation


`npm install client-link` or `yarn add client-link`

## Usage


**Note**: the recommended way of using client-link is together with [client-route](https://github.com/TimUntersberger/client-route).

html
```html
<script src="node_modules/client-link/index.js"></script>
<client-link to="/"> Home </client-route>
<client-link to="/about"> About </client-route>
```

listening for pathchanged events
```javascript
window.addEventListener("pathchanged", _ => {
    console.log(window.location.pathname);
})

```
## Attributes

### to
The url gets set to the path of the `to` attribute whenever the element is clicked.
```html
<client-route to="/"></client-route>
```

## Contributing


1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License


[LICENSE](LICENSE)
