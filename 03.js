//Asked by the sportiz

/* 
// Using an Immediately Invoked Function Expression (IIFE) and closures, create a module that exposes two methods: incrementCounter and getCounter. The internal counter variable should be completely private and inaccessible from outside the module.
 
const CounterModule = (function () {

  // Your implementation here

})();
 
console.log(CounterModule.getCounter()); // Should log 0

CounterModule.incrementCounter();

CounterModule.incrementCounter();

console.log(CounterModule.getCounter()); // Should log 2
 
// Try to access CounterModule.counter directly - should be undefined or throw error

console.log(CounterModule.counter); // Expected: undefined
*/

 const CounterModule = (function () {
    let counter =0;
    return {
        getCounter:()=>counter,
        incrementCounter:()=>counter++
    }
})();

console.log(CounterModule.getCounter()); // Should log 0

CounterModule.incrementCounter();

CounterModule.incrementCounter();

console.log(CounterModule.getCounter()); // Should log 2
 

console.log(CounterModule.counter); // Expected: undefined
