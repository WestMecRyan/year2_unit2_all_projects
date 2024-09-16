That's an excellent question! Showing students the available methods on an array prototype is a great way to demonstrate the power of JavaScript's built-in functionality. Here's how you can do that in the Node.js console:



```javascript
// Create a sample array
let sampleArray = [1, 2, 3];

// Log all properties of the array prototype
console.log(Object.getOwnPropertyNames(Array.prototype));

// To focus on just the methods:
console.log(Object.getOwnPropertyNames(Array.prototype).filter(prop => typeof Array.prototype[prop] === 'function'));

// For a more detailed view, including non-enumerable properties:
console.log(Object.getOwnPropertyDescriptors(Array.prototype));

// To see methods with their implementations:
Object.getOwnPropertyNames(Array.prototype)
  .filter(prop => typeof Array.prototype[prop] === 'function')
  .forEach(method => {
    console.log(`${method}: ${Array.prototype[method]}`);
  });

```

Here's a breakdown of what each part does:

1. `Object.getOwnPropertyNames(Array.prototype)`: This lists all properties (including non-enumerable ones) of the Array prototype. It includes both methods and other properties.

2. The filtered version focuses only on methods by checking if the property is a function.

3. `Object.getOwnPropertyDescriptors(Array.prototype)`: This provides more detailed information about each property, including whether it's writable, enumerable, etc.

4. The last example shows each method name along with its implementation (though for native methods, you'll typically see `[native code]`).

When you run this in Node.js, you'll see a list of all the array methods, including higher-order functions like `map`, `filter`, `reduce`, `forEach`, etc.

To demonstrate this interactively to students:

1. Open a terminal or command prompt.
2. Type `node` to start the Node.js REPL (Read-Eval-Print Loop).
3. Copy and paste each line of the code, explaining what it does.

For example:

```javascript
> Object.getOwnPropertyNames(Array.prototype).filter(prop => typeof Array.prototype[prop] === 'function')
[
  'toString',          'join',
  'pop',               'push',
  'reverse',           'shift',
  'unshift',           'slice',
  'splice',            'sort',
  'filter',            'forEach',
  'map',               'every',
  'some',              'reduce',
  'reduceRight',       'find',
  'findIndex',         // ... and more
]
```

This approach gives students a clear view of the rich set of methods available on arrays, highlighting the higher-order functions we've been discussing. It's a great way to encourage exploration and show the power of JavaScript's built-in functionality.