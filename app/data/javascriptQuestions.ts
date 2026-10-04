export const javascriptQuestions = [
  {
    slug: "what-is-lexical-scope-in-javascript",
    title: "What is lexical scope in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Common",
  
    answer:
      "Lexical scope means a function can access variables based on where the function is written in the code.",
  
    explanation:
      "JavaScript determines variable access from the structure of the source code. Inner functions can access variables from their outer scopes.",
  
    example: `let name = "Akanksha";
  
  function outer() {
    console.log(name);
  }
  
  outer();`,
  
    importantPoint:
      "Scope is determined by where code is written, not where a function is called.",
  
    commonMistakes: [
      "Confusing lexical scope with dynamic scope.",
      "Thinking scope depends on where a function is called.",
    ],
  
    followUps: [
      "What is the scope chain?",
      "What is a closure?",
      "What is block scope?",
    ],
  },
  
  {
    slug: "what-is-scope-chain-in-javascript",
    title: "What is the scope chain in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Common",
  
    answer:
      "The scope chain is the mechanism JavaScript uses to find variables by checking the current scope and then outer scopes.",
  
    explanation:
      "When JavaScript cannot find a variable in the current scope, it searches the parent scope and continues outward until it reaches the global scope.",
  
    example: `let a = 10;
  
  function outer() {
    let b = 20;
  
    function inner() {
      console.log(a);
      console.log(b);
    }
  
    inner();
  }
  
  outer();`,
  
    importantPoint:
      "JavaScript searches from the current scope outward.",
  
    commonMistakes: [
      "Thinking JavaScript searches sibling scopes.",
      "Confusing scope chain with the prototype chain.",
    ],
  
    followUps: [
      "What is lexical scope?",
      "What is a closure?",
    ],
  },
  
  {
    slug: "what-is-temporal-dead-zone",
    title: "What is the Temporal Dead Zone?",
    category: "JavaScript Basics",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "The Temporal Dead Zone is the period between entering a scope and initializing a let or const variable.",
  
    explanation:
      "let and const are hoisted but cannot be accessed before their declaration is initialized.",
  
    example: `console.log(a);
  
  let a = 10;
  
  // ReferenceError`,
  
    importantPoint:
      "TDZ applies to let and const from the beginning of their scope until initialization.",
  
    commonMistakes: [
      "Saying let and const are not hoisted.",
      "Thinking TDZ is a separate scope.",
    ],
  
    followUps: [
      "Are let and const hoisted?",
      "How is var different from let?",
    ],
  },
  
  {
    slug: "what-is-function-declaration-vs-expression",
    title: "What is the difference between function declaration and expression?",
    category: "Functions",
    difficulty: "Easy",
    interviewFrequency: "Common",
  
    answer:
      "A function declaration defines a named function directly, while a function expression assigns a function to a variable.",
  
    explanation:
      "Function declarations are fully hoisted, while function expressions follow the behavior of the variable used to store them.",
  
    example: `sayHello();
  
  function sayHello() {
    console.log("Hello");
  }`,
  
    importantPoint:
      "Function declarations can be called before their declaration.",
  
    commonMistakes: [
      "Assuming function expressions are fully hoisted.",
      "Treating declarations and expressions as identical.",
    ],
  
    followUps: [
      "How are arrow functions different?",
      "How does hoisting work with function expressions?",
    ],
  },
  
  {
    slug: "what-is-this-keyword-in-javascript",
    title: "What is the this keyword in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "The value of this depends on how a function is called, except for arrow functions which inherit this from their surrounding scope.",
  
    explanation:
      "For object method calls, this usually refers to the object. In regular functions, the value can change depending on the invocation context.",
  
    example: `const user = {
    name: "Akanksha",
  
    greet() {
      console.log(this.name);
    }
  };
  
  user.greet();`,
  
    importantPoint:
      "Do not determine this only by looking at where the function is defined.",
  
    commonMistakes: [
      "Assuming this always refers to the object.",
      "Forgetting that arrow functions do not have their own this.",
    ],
  
    followUps: [
      "How does this behave in arrow functions?",
      "What are call, apply and bind?",
    ],
  },
  
  {
    slug: "call-apply-bind-javascript",
    title: "What are call, apply and bind in JavaScript?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "call, apply and bind allow you to control the this value when calling or creating a function.",
  
    explanation:
      "call and apply invoke the function immediately. bind returns a new function with a fixed this value.",
  
    example: `function greet(city) {
    console.log(this.name, city);
  }
  
  const user = {
    name: "Akanksha"
  };
  
  greet.call(user, "Pune");`,
  
    importantPoint:
      "call and apply execute immediately, while bind returns a function.",
  
    commonMistakes: [
      "Thinking bind executes the function immediately.",
      "Confusing the argument syntax of call and apply.",
    ],
  
    followUps: [
      "What is function borrowing?",
      "How does bind work internally?",
    ],
  },
  
  {
    slug: "what-are-arrow-functions",
    title: "What are arrow functions in JavaScript?",
    category: "Functions",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
  
    answer:
      "Arrow functions provide a shorter function syntax and do not create their own this, arguments, or super.",
  
    explanation:
      "Arrow functions are especially useful for callbacks because they inherit this from their surrounding lexical scope.",
  
    example: `const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3));`,
  
    importantPoint:
      "Arrow functions inherit this from the surrounding scope.",
  
    commonMistakes: [
      "Assuming arrow functions have their own this.",
      "Trying to use new with an arrow function.",
    ],
  
    followUps: [
      "Can arrow functions be constructors?",
      "How are arrow functions different from regular functions?",
    ],
  },
  
  {
    slug: "what-is-event-bubbling",
    title: "What is event bubbling in JavaScript?",
    category: "DOM & Events",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
  
    answer:
      "Event bubbling is when an event propagates from the target element upward through its parent elements.",
  
    explanation:
      "If a child element is clicked, the event can propagate to its parent, then grandparent, and so on.",
  
    example: `parent.addEventListener("click", () => {
    console.log("parent");
  });
  
  child.addEventListener("click", () => {
    console.log("child");
  });`,
  
    importantPoint:
      "Events normally bubble from the target toward the document.",
  
    commonMistakes: [
      "Thinking bubbling happens from parent to child.",
      "Confusing bubbling with capturing.",
    ],
  
    followUps: [
      "What is event capturing?",
      "What does stopPropagation() do?",
      "What is event delegation?",
    ],
  },
  
  {
    slug: "what-is-event-delegation",
    title: "What is event delegation in JavaScript?",
    category: "DOM & Events",
    difficulty: "Medium",
    interviewFrequency: "Common",
  
    answer:
      "Event delegation means attaching one event listener to a parent instead of adding listeners to every child.",
  
    explanation:
      "It relies on event bubbling and is useful when working with many elements or dynamically created elements.",
  
    example: `list.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
      console.log(event.target.textContent);
    }
  });`,
  
    importantPoint:
      "Event delegation uses event bubbling.",
  
    commonMistakes: [
      "Thinking delegation requires a listener on every child.",
      "Forgetting to identify the actual event target.",
    ],
  
    followUps: [
      "What is event bubbling?",
      "What is event capturing?",
    ],
  },
  
  {
    slug: "what-is-debouncing",
    title: "What is debouncing in JavaScript?",
    category: "Performance",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "Debouncing delays function execution until a specified time has passed without another event occurring.",
  
    explanation:
      "It is commonly used for search inputs, resize events, and other operations triggered frequently.",
  
    example: `function debounce(fn, delay) {
    let timer;
  
    return function () {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  }`,
  
    importantPoint:
      "Debouncing waits for a pause before executing the function.",
  
    commonMistakes: [
      "Confusing debounce with throttle.",
      "Forgetting to clear the previous timer.",
    ],
  
    followUps: [
      "What is throttling?",
      "When should debounce be used?",
    ],
  },
  
  {
    slug: "what-is-throttling",
    title: "What is throttling in JavaScript?",
    category: "Performance",
    difficulty: "Medium",
    interviewFrequency: "Common",
  
    answer:
      "Throttling limits how frequently a function can execute within a specific time period.",
  
    explanation:
      "It is useful for events such as scrolling, mouse movement, and window resizing.",
  
    example: `// Function executes at most
  // once every 100ms`,
  
    importantPoint:
      "Throttle controls execution frequency rather than waiting for a pause.",
  
    commonMistakes: [
      "Confusing throttling with debouncing.",
      "Thinking throttling prevents all repeated calls.",
    ],
  
    followUps: [
      "What is debouncing?",
      "When should throttling be used?",
    ],
  },
  
  {
    slug: "what-is-promise-all",
    title: "What is Promise.all()?",
    category: "Async JavaScript",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "Promise.all() waits for multiple promises and resolves when all of them succeed.",
  
    explanation:
      "If any promise rejects, Promise.all() immediately rejects with that error.",
  
    example: `const results = await Promise.all([
    fetch("/users"),
    fetch("/posts")
  ]);`,
  
    importantPoint:
      "Promise.all() fails when any input promise rejects.",
  
    commonMistakes: [
      "Thinking Promise.all() returns the first completed promise.",
      "Forgetting that one rejection rejects the entire operation.",
    ],
  
    followUps: [
      "Promise.all vs Promise.allSettled?",
      "Promise.all vs Promise.race?",
    ],
  },
  
  {
    slug: "promise-all-vs-allsettled",
    title: "What is the difference between Promise.all() and Promise.allSettled()?",
    category: "Async JavaScript",
    difficulty: "Medium",
    interviewFrequency: "Common",
  
    answer:
      "Promise.all() rejects when any promise fails, while Promise.allSettled() waits for every promise to finish.",
  
    explanation:
      "allSettled() is useful when you need the result of every operation regardless of success or failure.",
  
    example: `const results = await Promise.allSettled([
    Promise.resolve(10),
    Promise.reject("Error")
  ]);`,
  
    importantPoint:
      "Use allSettled when individual failures should not stop collecting results.",
  
    commonMistakes: [
      "Thinking allSettled rejects on the first failure.",
      "Assuming both methods return the same result format.",
    ],
  
    followUps: [
      "What is Promise.race()?",
      "What is Promise.any()?",
    ],
  },
  
  {
    slug: "what-is-promise-race",
    title: "What is Promise.race()?",
    category: "Async JavaScript",
    difficulty: "Medium",
    interviewFrequency: "Common",
  
    answer:
      "Promise.race() settles as soon as the first input promise settles.",
  
    explanation:
      "The first promise to either resolve or reject determines the result of Promise.race().",
  
    example: `const result = await Promise.race([
    fetch("/api"),
    timeoutPromise
  ]);`,
  
    importantPoint:
      "The first settled promise wins, whether fulfilled or rejected.",
  
    commonMistakes: [
      "Thinking race waits for the first successful promise.",
      "Confusing settled with fulfilled.",
    ],
  
    followUps: [
      "What is Promise.any()?",
      "Promise.race vs Promise.any?",
    ],
  },
  
  {
    slug: "what-is-async-await",
    title: "What is async/await in JavaScript?",
    category: "Async JavaScript",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
  
    answer:
      "async/await provides a cleaner syntax for working with promises.",
  
    explanation:
      "An async function always returns a promise. await pauses execution inside that async function until the promise settles.",
  
    example: `async function getUsers() {
    const response = await fetch("/users");
    const data = await response.json();
  
    return data;
  }`,
  
    importantPoint:
      "await pauses the async function, not the entire JavaScript runtime.",
  
    commonMistakes: [
      "Thinking await blocks the entire JavaScript thread.",
      "Forgetting that async functions return promises.",
    ],
  
    followUps: [
      "How does async/await work with try/catch?",
      "Can await be used outside an async function?",
    ],
  },
  
  {
    slug: "what-is-prototype-in-javascript",
    title: "What is a prototype in JavaScript?",
    category: "Objects",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "A prototype is an object from which another object can inherit properties and methods.",
  
    explanation:
      "JavaScript uses prototype-based inheritance. Objects can access properties through their prototype chain.",
  
    example: `const user = {
    name: "Akanksha"
  };
  
  console.log(user.toString());`,
  
    importantPoint:
      "JavaScript inheritance is based on objects and prototypes.",
  
    commonMistakes: [
      "Confusing prototype with class-based inheritance.",
      "Thinking every object directly stores all inherited methods.",
    ],
  
    followUps: [
      "What is the prototype chain?",
      "What is __proto__?",
      "How does class inheritance work internally?",
    ],
  },
  
  {
    slug: "what-is-shallow-copy-vs-deep-copy",
    title: "What is the difference between shallow copy and deep copy?",
    category: "Objects & Arrays",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
  
    answer:
      "A shallow copy copies the top-level structure, while a deep copy also creates independent nested objects.",
  
    explanation:
      "With a shallow copy, nested objects can still reference the same memory. A deep copy creates separate nested structures.",
  
    example: `const original = {
    user: {
      name: "Akanksha"
    }
  };
  
  const copy = {
    ...original
  };`,
  
    importantPoint:
      "Spread syntax creates a shallow copy, not a deep copy.",
  
    commonMistakes: [
      "Assuming spread syntax deeply clones objects.",
      "Ignoring nested object references.",
    ],
  
    followUps: [
      "How can you deep clone an object?",
      "What are the limitations of JSON.parse/stringify?",
    ],
  },
  
  {
    slug: "map-filter-reduce-javascript",
    title: "What are map(), filter(), and reduce()?",
    category: "Arrays",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
  
    answer:
      "map transforms elements, filter selects elements, and reduce combines elements into a single result.",
  
    explanation:
      "These array methods are commonly used for functional-style data processing.",
  
    example: `const nums = [1, 2, 3];
  
  const doubled = nums.map(n => n * 2);
  
  const even = nums.filter(n => n % 2 === 0);
  
  const sum = nums.reduce((a, b) => a + b, 0);`,
  
    importantPoint:
      "map returns an array, filter returns selected elements, reduce returns an accumulated value.",
  
    commonMistakes: [
      "Using map when filter is needed.",
      "Forgetting the initial value when reduce requires one.",
    ],
  
    followUps: [
      "Does map mutate the original array?",
      "How does reduce work internally?",
    ],
  },
  
  {
    slug: "what-is-immutability-in-javascript",
    title: "What is immutability in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Medium",
    interviewFrequency: "Common",
  
    answer:
      "Immutability means avoiding direct modification of existing data and creating new values instead.",
  
    explanation:
      "Immutable updates are especially important in React because they make state changes easier to detect and reason about.",
  
    example: `const user = {
    name: "Akanksha"
  };
  
  const updatedUser = {
    ...user,
    name: "Alex"
  };`,
  
    importantPoint:
      "const prevents reassignment of a variable, but it does not make objects immutable.",
  
    commonMistakes: [
      "Thinking const makes an object immutable.",
      "Confusing immutability with deep freezing.",
    ],
  
    followUps: [
      "Why is immutability important in React?",
      "What does Object.freeze() do?",
    ],
  },
  
  {
    slug: "what-is-garbage-collection",
    title: "What is garbage collection in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Medium",
    interviewFrequency: "Common",
  
    answer:
      "Garbage collection automatically removes objects that are no longer reachable by the program.",
  
    explanation:
      "Modern JavaScript engines use garbage collectors to reclaim memory that can no longer be accessed.",
  
    example: `let user = {
    name: "Akanksha"
  };
  
  user = null;
  
  // The previous object may
  // become eligible for GC.`,
  
    importantPoint:
      "Garbage collection is based mainly on whether objects remain reachable.",
  
    commonMistakes: [
      "Thinking garbage collection immediately frees memory.",
      "Assuming setting a variable to null always immediately removes the object.",
    ],
  
    followUps: [
      "What causes memory leaks?",
      "How can closures contribute to memory usage?",
    ],
  },

  {
    slug: "what-is-function-scope-in-javascript",
    title: "What is function scope in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "Function scope means variables declared with var inside a function are accessible throughout that function, but not outside it.",
    explanation:
      "A variable declared using var inside a function belongs to that function's scope. It can be accessed from anywhere inside the function, including before its declaration because of hoisting.",
    example: `function test() {
    var name = "Akanksha";
    console.log(name);
  }
  
  test();
  
  console.log(name); // ReferenceError`,
    importantPoint:
      "var is function-scoped, while let and const are block-scoped.",
    commonMistakes: [
      "Thinking var is block-scoped",
      "Confusing function scope with block scope",
    ],
    followUps: [
      "What is block scope?",
      "What is the difference between var, let and const?",
    ],
  },
  
  {
    slug: "what-is-block-scope-in-javascript",
    title: "What is block scope in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "Block scope means a variable is accessible only inside the block where it was declared. let and const are block-scoped.",
    explanation:
      "A block is generally represented by curly braces {}. Variables declared using let or const inside a block cannot be accessed outside that block.",
    example: `if (true) {
    let name = "Akanksha";
    const age = 25;
  
    console.log(name);
  }
  
  console.log(name); // ReferenceError`,
    importantPoint:
      "let and const are block-scoped, while var is function-scoped.",
    commonMistakes: [
      "Thinking all JavaScript variables are function-scoped",
      "Assuming var behaves like let inside a block",
    ],
    followUps: [
      "What is function scope?",
      "What is lexical scope?",
    ],
  },
  
  {
    slug: "what-is-global-scope-in-javascript",
    title: "What is global scope in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "Global scope is the outermost scope of a JavaScript program. Variables declared there can generally be accessed from other scopes.",
    explanation:
      "A globally declared variable is available throughout the program, depending on how and where it is declared. Too many global variables can make code harder to maintain because many parts of the application can modify them.",
    example: `const appName = "JS Interview Kit";
  
  function showName() {
    console.log(appName);
  }
  
  showName();`,
    importantPoint:
      "Avoid unnecessary global variables because they can create unexpected dependencies.",
    commonMistakes: [
      "Thinking global variables can only be accessed from the global scope",
      "Creating too many global variables",
    ],
    followUps: [
      "What is lexical scope?",
      "What is the scope chain?",
    ],
  },
  
  {
    slug: "what-is-lexical-scope-in-javascript",
    title: "What is lexical scope in JavaScript?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "Lexical scope means a function can access variables based on where the function was defined in the source code.",
    explanation:
      "JavaScript determines the scope of a function from its position in the code, not from where the function is called. This is one of the key concepts behind closures.",
    example: `const name = "Akanksha";
  
  function outer() {
    const age = 25;
  
    function inner() {
      console.log(name);
      console.log(age);
    }
  
    inner();
  }
  
  outer();`,
    importantPoint:
      "Lexical scope is determined by where code is written, not where a function is called.",
    commonMistakes: [
      "Thinking scope depends on where a function is called",
      "Confusing lexical scope with dynamic scope",
    ],
    followUps: [
      "What is a closure?",
      "What is the scope chain?",
    ],
  },
  
  {
    slug: "what-is-scope-chain-in-javascript",
    title: "What is the scope chain in JavaScript?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "The scope chain is the chain of scopes JavaScript searches when trying to find a variable.",
    explanation:
      "When JavaScript cannot find a variable in the current scope, it looks at the outer lexical scope. It continues moving outward until it finds the variable or reaches the global scope.",
    example: `const name = "Global";
  
  function outer() {
    const age = 25;
  
    function inner() {
      console.log(age);
      console.log(name);
    }
  
    inner();
  }
  
  outer();`,
    importantPoint:
      "JavaScript searches from the current scope outward through its lexical parent scopes.",
    commonMistakes: [
      "Thinking JavaScript searches the function that called the current function",
      "Confusing scope chain with the call stack",
    ],
    followUps: [
      "What is lexical scope?",
      "What is a closure?",
    ],
  },
  
  {
    slug: "what-is-function-declaration-in-javascript",
    title: "What is a function declaration in JavaScript?",
    category: "Functions",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "A function declaration defines a named function using the function keyword.",
    explanation:
      "Function declarations are hoisted, so they can generally be called before they appear in the code.",
    example: `sayHello();
  
  function sayHello() {
    console.log("Hello");
  }`,
    importantPoint:
      "Function declarations are hoisted with their function definition.",
    commonMistakes: [
      "Assuming function declarations behave exactly like function expressions",
    ],
    followUps: [
      "What is a function expression?",
      "What is hoisting?",
    ],
  },
  
  {
    slug: "what-is-function-expression-in-javascript",
    title: "What is a function expression in JavaScript?",
    category: "Functions",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "A function expression is a function assigned to a variable.",
    explanation:
      "Unlike a function declaration, the function itself is created as part of an expression. If the variable is declared using const or let, it cannot be accessed before initialization.",
    example: `const sayHello = function () {
    console.log("Hello");
  };
  
  sayHello();`,
    importantPoint:
      "Function expressions are commonly used when functions need to be assigned, passed around, or stored in variables.",
    commonMistakes: [
      "Confusing function expressions with function declarations",
      "Expecting a const function expression to work before initialization",
    ],
    followUps: [
      "What is an arrow function?",
      "How does hoisting work with function expressions?",
    ],
  },
  
  {
    slug: "what-are-first-class-functions-in-javascript",
    title: "What are first-class functions in JavaScript?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "First-class functions means functions can be treated like values in JavaScript.",
    explanation:
      "A function can be stored in a variable, passed as an argument, returned from another function, and stored inside objects or arrays.",
    example: `function greet() {
    return "Hello";
  }
  
  const fn = greet;
  
  function execute(callback) {
    console.log(callback());
  }
  
  execute(fn);`,
    importantPoint:
      "Functions can be passed around just like other values.",
    commonMistakes: [
      "Confusing first-class functions with higher-order functions",
    ],
    followUps: [
      "What is a higher-order function?",
      "What is a callback function?",
    ],
  },
  
  {
    slug: "what-is-a-higher-order-function",
    title: "What is a higher-order function?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "A higher-order function is a function that takes another function as an argument or returns a function.",
    explanation:
      "JavaScript supports higher-order functions because functions are first-class values. Array methods such as map, filter and reduce are common examples.",
    example: `function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  console.log(calculate(2, 3, add)); // 5`,
    importantPoint:
      "A function is higher-order if it accepts a function or returns a function.",
    commonMistakes: [
      "Thinking every callback is automatically a higher-order function",
    ],
    followUps: [
      "What is a callback?",
      "What are first-class functions?",
    ],
  },
  
  {
    slug: "what-is-a-callback-function",
    title: "What is a callback function?",
    category: "Functions",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "A callback is a function passed to another function so that it can be executed later.",
    explanation:
      "Callbacks are commonly used in asynchronous operations, event handling, and array methods.",
    example: `function greet(name, callback) {
    console.log("Hello " + name);
    callback();
  }
  
  greet("Akanksha", function () {
    console.log("Welcome!");
  });`,
    importantPoint:
      "A callback is simply a function passed to another function.",
    commonMistakes: [
      "Thinking callbacks are only used for asynchronous operations",
    ],
    followUps: [
      "What is callback hell?",
      "How do promises improve callback-based code?",
    ],
  },
  
  {
    slug: "what-is-the-this-keyword-in-javascript",
    title: "What is the this keyword in JavaScript?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "The value of this generally refers to the object associated with the current function call.",
    explanation:
      "The value of this depends on how a function is called. In an object method, it usually refers to the object. In arrow functions, this is inherited from the surrounding lexical scope.",
    example: `const user = {
    name: "Akanksha",
  
    greet() {
      console.log(this.name);
    }
  };
  
  user.greet(); // Akanksha`,
    importantPoint:
      "For normal functions, this is determined by how the function is called.",
    commonMistakes: [
      "Thinking this always refers to the object where the function was written",
      "Assuming arrow functions create their own this",
    ],
    followUps: [
      "How is this different in arrow functions?",
      "What are call, apply and bind?",
    ],
  },
  
  {
    slug: "what-is-call-apply-and-bind",
    title: "What are call, apply and bind in JavaScript?",
    category: "Functions",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "call, apply and bind are methods used to control the value of this when calling or creating a function.",
    explanation:
      "call invokes a function immediately with arguments provided separately. apply also invokes it immediately but takes arguments as an array. bind returns a new function with this permanently associated with the provided object.",
    example: `const user = {
    name: "Akanksha"
  };
  
  function greet(age) {
    console.log(this.name, age);
  }
  
  greet.call(user, 25);
  greet.apply(user, [25]);
  
  const newGreet = greet.bind(user);
  newGreet(25);`,
    importantPoint:
      "call and apply execute immediately, while bind returns a new function.",
    commonMistakes: [
      "Thinking bind executes the function immediately",
      "Forgetting that apply takes arguments as an array",
    ],
    followUps: [
      "How does this work in arrow functions?",
      "What is function borrowing?",
    ],
  },
  
  {
    slug: "what-are-arrow-functions",
    title: "What are arrow functions in JavaScript?",
    category: "ES6",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "Arrow functions provide a shorter syntax for writing functions and do not have their own this.",
    explanation:
      "Arrow functions inherit this from their surrounding lexical scope. They also do not have their own arguments object and cannot be used as constructors.",
    example: `const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3)); // 5`,
    importantPoint:
      "Arrow functions use lexical this instead of creating their own this.",
    commonMistakes: [
      "Assuming arrow functions have their own this",
      "Trying to use an arrow function with new",
    ],
    followUps: [
      "Arrow function vs normal function?",
      "How does this behave inside arrow functions?",
    ],
  },
  
  {
    slug: "what-is-type-coercion-in-javascript",
    title: "What is type coercion in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "Type coercion is the automatic or explicit conversion of one data type into another.",
    explanation:
      "JavaScript can automatically convert values during operations. For example, the + operator can convert a number into a string when combined with a string.",
    example: `console.log("5" + 2); // "52"
  console.log("5" - 2); // 3
  
  console.log(Boolean(0)); // false`,
    importantPoint:
      "JavaScript performs implicit type coercion in many operations.",
    commonMistakes: [
      "Assuming + and - perform type conversion in exactly the same way",
      "Not checking the actual types of values",
    ],
    followUps: [
      "What is the difference between == and ===?",
      "What are truthy and falsy values?",
    ],
  },
  
  {
    slug: "what-are-truthy-and-falsy-values",
    title: "What are truthy and falsy values in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "Truthy values behave like true in a boolean context, while falsy values behave like false.",
    explanation:
      "Common falsy values include false, 0, -0, 0n, empty string, null, undefined and NaN. Most other values are truthy, including empty arrays and empty objects.",
    example: `if ("hello") {
    console.log("Truthy");
  }
  
  if (0) {
    console.log("This will not run");
  }
  
  if ([]) {
    console.log("Arrays are truthy");
  }`,
    importantPoint:
      "Empty arrays [] and empty objects {} are truthy.",
    commonMistakes: [
      "Thinking [] is falsy",
      "Thinking {} is falsy",
      "Forgetting about NaN",
    ],
    followUps: [
      "What are falsy values in JavaScript?",
      "What is type coercion?",
    ],
  },
  
  {
    slug: "what-is-the-difference-between-null-and-undefined",
    title: "What is the difference between null and undefined?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "undefined generally means a value has not been assigned, while null is an intentional absence of a value.",
    explanation:
      "A variable declared without an assigned value is undefined. null is usually assigned explicitly when we want to represent no value.",
    example: `let a;
  
  console.log(a); // undefined
  
  let user = null;
  
  console.log(user); // null`,
    importantPoint:
      "undefined usually represents missing or unassigned value, while null is explicitly assigned.",
    commonMistakes: [
      "Treating null and undefined as completely identical",
      "Assuming null means a variable does not exist",
    ],
    followUps: [
      "Why does typeof null return object?",
      "What is the difference between null, undefined and NaN?",
    ],
  },
  
  {
    slug: "what-is-nan-in-javascript",
    title: "What is NaN in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "NaN stands for Not-a-Number and represents a value that is not a valid numerical result.",
    explanation:
      "NaN is a special numeric value. Interestingly, its type is number. NaN is also not equal to itself, so Number.isNaN() is preferred for checking it.",
    example: `const result = "hello" * 5;
  
  console.log(result); // NaN
  console.log(typeof result); // "number"
  
  console.log(Number.isNaN(result)); // true`,
    importantPoint:
      "typeof NaN is number, and NaN !== NaN.",
    commonMistakes: [
      "Thinking typeof NaN is 'NaN'",
      "Using value === NaN to check for NaN",
    ],
    followUps: [
      "How do you check whether a value is NaN?",
      "What is the difference between Number.isNaN and global isNaN?",
    ],
  },
  
  {
    slug: "what-is-the-difference-between-primitive-and-reference-types",
    title: "What is the difference between primitive and reference types?",
    category: "JavaScript Basics",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "Primitive values represent individual immutable values, while objects and arrays are reference-based values.",
    explanation:
      "Primitive values include string, number, bigint, boolean, undefined, symbol and null. Objects, arrays and functions are objects and are handled through references.",
    example: `let a = 10;
  let b = a;
  
  b = 20;
  
  console.log(a); // 10
  
  let user1 = { name: "Akanksha" };
  let user2 = user1;
  
  user2.name = "Rahul";
  
  console.log(user1.name); // Rahul`,
    importantPoint:
      "Assigning an object to another variable copies the reference to the same object.",
    commonMistakes: [
      "Thinking objects are copied automatically when assigned",
      "Assuming arrays are primitive values",
    ],
    followUps: [
      "What is shallow copy?",
      "What is deep copy?",
    ],
  },
  
  {
    slug: "how-does-object-assignment-work-in-javascript",
    title: "How does object assignment work in JavaScript?",
    category: "Objects",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "When an object is assigned to another variable, both variables refer to the same object.",
    explanation:
      "JavaScript does not create a new object during normal assignment. The new variable receives a reference to the existing object.",
    example: `const user1 = {
    name: "Akanksha"
  };
  
  const user2 = user1;
  
  user2.name = "Rahul";
  
  console.log(user1.name); // Rahul`,
    importantPoint:
      "Changing the object through one reference affects the same object accessed through another reference.",
    commonMistakes: [
      "Thinking user2 is a separate copy",
      "Confusing assignment with object cloning",
    ],
    followUps: [
      "How do you clone an object?",
      "What is shallow copy vs deep copy?",
    ],
  },
  
  {
    slug: "what-is-object-destructuring",
    title: "What is object destructuring in JavaScript?",
    category: "ES6",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "Object destructuring allows you to extract properties from an object into variables.",
    explanation:
      "Instead of accessing each property separately, destructuring provides a shorter syntax for extracting values.",
    example: `const user = {
    name: "Akanksha",
    age: 25
  };
  
  const { name, age } = user;
  
  console.log(name);
  console.log(age);`,
    importantPoint:
      "The variable names match object property names by default.",
    commonMistakes: [
      "Confusing object destructuring with array destructuring",
      "Forgetting that property names are used by default",
    ],
    followUps: [
      "How do you rename a destructured property?",
      "How does default value work in destructuring?",
    ],
  },
  
  {
    slug: "what-is-array-destructuring",
    title: "What is array destructuring in JavaScript?",
    category: "ES6",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "Array destructuring allows you to extract values from an array into variables based on their positions.",
    explanation:
      "The first variable receives the first array element, the second variable receives the second element, and so on.",
    example: `const numbers = [10, 20, 30];
  
  const [first, second, third] = numbers;
  
  console.log(first); // 10
  console.log(second); // 20
  console.log(third); // 30`,
    importantPoint:
      "Array destructuring works based on position, unlike object destructuring which works by property name.",
    commonMistakes: [
      "Thinking array destructuring uses property names",
      "Forgetting that order matters",
    ],
    followUps: [
      "How do you skip an array element while destructuring?",
      "What is object destructuring?",
    ],
  },
  
  {
    slug: "what-is-the-spread-operator-in-javascript",
    title: "What is the spread operator in JavaScript?",
    category: "ES6",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "The spread operator (...) expands the elements of an iterable or properties of an object.",
    explanation:
      "Spread is commonly used to copy or combine arrays and objects. For objects and arrays, the copy created by spread is shallow.",
    example: `const numbers = [1, 2, 3];
  
  const newNumbers = [...numbers, 4];
  
  console.log(newNumbers); // [1, 2, 3, 4]
  
  const user = {
    name: "Akanksha"
  };
  
  const updatedUser = {
    ...user,
    age: 25
  };`,
    importantPoint:
      "Spread creates a shallow copy when used with arrays or objects.",
    commonMistakes: [
      "Thinking spread performs a deep copy",
      "Confusing spread with rest syntax",
    ],
    followUps: [
      "What is the rest operator?",
      "What is shallow copy?",
    ],
  },
  
  {
    slug: "what-is-the-rest-operator-in-javascript",
    title: "What is the rest operator in JavaScript?",
    category: "ES6",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "The rest operator (...) collects multiple values into a single array or object.",
    explanation:
      "Rest syntax is commonly used in function parameters and destructuring. Although it uses the same ... syntax as spread, its purpose is the opposite: it collects values instead of expanding them.",
    example: `function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(add(1, 2, 3)); // 6`,
    importantPoint:
      "Spread expands values, while rest collects values.",
    commonMistakes: [
      "Confusing rest and spread",
      "Thinking rest syntax can be used anywhere",
    ],
    followUps: [
      "What is the spread operator?",
      "Where can rest parameters be used?",
    ],
  },
  
  {
    slug: "what-is-optional-chaining-in-javascript",
    title: "What is optional chaining in JavaScript?",
    category: "ES2020",
    difficulty: "Easy",
    interviewFrequency: "Very Common",
    answer:
      "Optional chaining (?.) allows you to safely access nested properties without throwing an error when an intermediate value is null or undefined.",
    explanation:
      "Without optional chaining, accessing a property of null or undefined can throw a TypeError. Optional chaining stops the access and returns undefined.",
    example: `const user = {};
  
  console.log(user.profile?.name);
  // undefined`,
    importantPoint:
      "Optional chaining prevents errors when accessing properties through null or undefined values.",
    commonMistakes: [
      "Thinking optional chaining handles every possible error",
      "Confusing ?. with the nullish coalescing operator",
    ],
    followUps: [
      "What is the nullish coalescing operator?",
      "What is the difference between || and ??",
    ],
  },
  
  {
    slug: "what-is-nullish-coalescing-operator",
    title: "What is the nullish coalescing operator?",
    category: "ES2020",
    difficulty: "Easy",
    interviewFrequency: "Common",
    answer:
      "The nullish coalescing operator (??) returns the right-hand value only when the left-hand value is null or undefined.",
    explanation:
      "Unlike ||, the ?? operator does not treat values such as 0, false, or an empty string as missing.",
    example: `const count = 0;
  
  console.log(count || 10); // 10
  console.log(count ?? 10); // 0`,
    importantPoint:
      "?? only considers null and undefined as missing values.",
    commonMistakes: [
      "Thinking ?? behaves exactly like ||",
      "Using || when 0 or false are valid values",
    ],
    followUps: [
      "What is optional chaining?",
      "What is the difference between || and ??",
    ],
  },
  
  {
    slug: "what-is-immutability-in-javascript",
    title: "What is immutability in JavaScript?",
    category: "JavaScript Basics",
    difficulty: "Medium",
    interviewFrequency: "Very Common",
    answer:
      "Immutability means avoiding direct modification of existing values and instead creating new values when changes are needed.",
    explanation:
      "JavaScript objects and arrays are mutable by default. In frontend development, especially React, immutable updates make state changes easier to reason about.",
    example: `const numbers = [1, 2, 3];
  
  const updatedNumbers = [...numbers, 4];
  
  console.log(numbers); // [1, 2, 3]
  console.log(updatedNumbers); // [1, 2, 3, 4]`,
    importantPoint:
      "Immutability does not mean JavaScript objects cannot be changed; it means we choose not to mutate existing data directly.",
    commonMistakes: [
      "Thinking const automatically makes an object immutable",
      "Mutating arrays directly when working with React state",
    ],
    followUps: [
      "Why is immutability important in React?",
      "What is shallow copy?",
    ],
  },
  ];