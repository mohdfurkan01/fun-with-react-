### File and Folder Structuer

1. To make our React project more straightforward and focus on learning or building, we can clean up the folder structure by removing unnecessary files.

App.css

App.test.js

index.css

logo.svg

reportWebVitals.js

setupTests.js

Helps you understand what’s going on in your project.

Reduces clutter, especially when starting fresh.

If we need those files later (like CSS for styling), we can create them as needed.

# File Name:

The convention is to use a capitalized first letter (PascalCase) for component files, like MyComponent.js.

# Component Function Name:

Should also start with a capital letter, like function MyComponent() { ... }.

```
function mycomponent() {
  return <h1>Hello</h1>;
}
export default mycomponent;


Using it like this:
<mycomponent />
```

React will throw an error or render nothing because it looks for a custom HTML tag mycomponent instead of your React component.
