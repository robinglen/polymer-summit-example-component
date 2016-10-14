# polymer-summit-example-component
An example simple product component to show our testing principles.

Similar to `<nap-product-summary>` but with a lot of the features removed.

Using a bunch of ES6 so to be save run in Chrome.

# Setting up
Requries Polymer CLI to serve.

```bash
npm install -g polymer-cli
bower install
npm install
```

# Running

```bash
npm start
```

# Testing

```bash
npm test
```

There are a few different types of tests run:

### Linter

We run polylint over the code to make sure everything has been done correctly.

### Unit tests

Designed to test the internal private methods work as expected, if these parameters are passed in do we get the expected result. These are run on both shady and shadow dom.

### Component tests

Designed to test the component has been rendered correctly and it behaves as expected. Checking content has been rendered and mocking any events required for testing.

### Structured data tests

Test whether the component complies with Schema.org structured data standards.


Built with Polymer CLI.
