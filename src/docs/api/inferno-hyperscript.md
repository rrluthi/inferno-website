inferno-hyperscript
---
> [Hyperscript][hyperscript] syntax for [Inferno][inferno] termplates.

## Usage

```javascript
var h = require('inferno-hyperscript');

module.exports = function ExampleComponent(props) {
  return h('.example', [
    h('a.example-link', {
      href: '#'
    }, [
      'Hello',
      props.whom,
      '!'
    ])
  ]);
};
```

## Documentation

### `h(componentOrTag, properties, children)`

Returns an Inferno VNode from a Hyperscript representation.

* **componentOrTag** `(Object|String)` can be an Inferno component **OR** tag string with optional css class names and ids in the format `h1#some-id.foo.bar`.
  If a tag string, the tag name is parsed out, and the `id` and `className` propertires of the properties argument will be modified.
* **properties** `(Object)` *(optional)* An object containing the properties you'd like to set on the element.
* **children** `(Array|String)` *(optional)* An array of `h()` children or strings, This will create childen or text nodes respectively.
