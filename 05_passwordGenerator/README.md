### useEffect

React hook for handling side effects (e.g., fetching data, updating DOM, etc.).

Runs after the component renders.

Can depend on values. Runs again if those values change.

Syntax: useEffect(() => { /_ code _/ }, [dependencies]);

No dependencies: Runs after every render.

Empty array: Runs once after the first render.

```javascript
useEffect(() => {
  console.log("This runs every time 'length' changes");
}, [length]); // Only runs when 'length' changes.
```

### useRef

React hook for accessing/managing DOM elements or keeping a mutable variable that doesn't trigger re-renders.

Common Use Cases:

Accessing DOM elements directly.
Storing a value persistently across renders without causing re-renders.

```javascript
const inputRef = useRef(null);
const focusInput = () => {
  inputRef.current?.focus(); // Directly interacts with the DOM input element.
};
```

### useCallback

React hook to memoize functions.

Ensures the function reference doesn't change unless dependencies change.

Useful for optimizing performance in child components.

Memoization is like creating a "memory" for a function. When you memoize a function, it saves the result of the function call and the inputs (dependencies). If the function is called again with the same inputs, it skips recalculating the result and instead returns the saved result.

```javascript
const memoizedFunction = useCallback(() => {
  console.log("I depend on 'count'");
}, [count]); // Recreated only when 'count' changes.
```

### useState

React hook to handle state in a functional component.

Returns a pair:

State variable (current value).

Setter function to update the state.

Syntax: const [state, setState] = useState(initialValue);

```javascript
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
```
