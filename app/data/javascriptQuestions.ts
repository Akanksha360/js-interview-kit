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
  ];