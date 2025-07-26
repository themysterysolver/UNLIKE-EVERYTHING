## PLAN 

- [X] Select the `Select` button
- [x] continiously select all the reels
    - [x] figure out query selector
    - [x] figure out the looping logic/when to break!
- [x] click delete all

---

## QUICK NOTE

- js is `async`
- we wanna make it `sync` thus we use `await` but to use this we need `async` if `await` is inside a function.
- `await` waits for a `promise` which is a *class* which can be created with `resolve` and `reject` fucntions which can be 
handled by `then` and `catch`.
- `setInterval(fx,ms)` time in ms and a function that repates itself!

###### Lil more in detail!


- JavaScript is asynchronous by default (non-blocking), meaning it can run code in the background (like timers or network calls).
- We can write async code in a synchronous style using async and await.
- To use await, it must be inside an async function.
- await waits for a Promise to resolve or reject, pausing the function execution until it completes.
- A Promise is a JavaScript class that represents a value that may be available now, in the future, or never.
- Promises can be created with the Promise constructor, which gives you access to resolve() and reject():

``` javascript []
new Promise((resolve, reject) => {
  // do something
});
```
- Promises are handled using .then() (for success) and .catch() (for errors).
- setInterval(fn, ms) runs the function fn repeatedly every ms milliseconds
----