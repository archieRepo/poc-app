Giving Frontend interviews?💡

Just brush up with these...

I have created a list of top hashtag#interview questions (on all the topics) that can be asked in Frontend interviews 

𝗛𝗧𝗠𝗟
1. What is the difference between `id` and `class` attributes?
2. How does the `doctype` declaration affect a webpage?
3. Explain semantic HTML and its importance.
4. What are `meta` tags, and why are they used?
5. What is the difference between `span` and `div` tags?
6. How does the `defer` attribute in a script tag work?
7. What is the difference between inline, block, and inline-block elements?
8. How do you optimize images for web performance in HTML?
9. What are custom data attributes, and how are they used?
10. How would you create an accessible custom tooltip using only HTML?

𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧
1. What are closures, and how are they used?
2. Explain the difference between `var`, `let`, and `const`.
3. What is the event loop in JavaScript?
4. How does prototypal inheritance work?
5. What are promises, and how do they compare to async/await?
6. What is the difference between `==` and `===`?
7. Explain the concept of "hoisting" in JavaScript.
8. How do you handle errors in JavaScript?
9. What is debouncing and throttling in JavaScript?
10. How would you implement a deep clone of an object without using libraries?

𝗥𝗘𝗔𝗖𝗧
1. What is the virtual DOM, and how does it work?
2. How do React functional components differ from class components?
3. What are React hooks, and why are they used?
4. Explain the concept of lifting state up in React.
5. What is the purpose of `useEffect` and how is it used?
6. How does context API work in React?
7. What is the difference between controlled and uncontrolled components?
8. How do you optimize a React application’s performance?
9. What are React portals, and how are they useful?
10. How would you implement a custom hook to debounce user input in a React application?

𝗔𝗰𝗰𝗲𝘀𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆
1. What is ARIA, and why is it important?
2. How would you ensure a form is accessible?
3. What are some common accessibility issues in web development?
4. How do you make images accessible?
5. What is a screen reader, and how does it work?
6. How would you create an accessible navigation menu?
7. What is the difference between `role="button"` and a `<button>` element?
8. How do you test a webpage for accessibility?

𝗢𝗽𝘁𝗶𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻
1. What is lazy loading, and how do you implement it?
2. How do you reduce the size of a JavaScript bundle?
3. What are the benefits of using a Content Delivery Network (CDN)?
4. How do you optimize CSS delivery?
5. What is caching, and how does it improve performance?
6. What are critical rendering paths?

Source : Putting together information from various posts 

Thanks Dimple Kumari for the content.

Ashwin Vemula


✅ Like this post to celebrate together!
🔁 Repost to spread the word to your network.
💬 Comment your thoughts or share your experiences—I’d love to hear from you!

Frontend Interview Pattern & Frequently Asked Questions 🔥

Most product-based companies typically have 4-5 rounds of frontend interviews:
 1️⃣ JavaScript
 2️⃣ Machine Coding / React
 3️⃣ Data Structures & Algorithms (DSA)
 4️⃣ System Design
 5️⃣ Managerial Round

Let's break of First Two Rounds

React Round (60-120 min)
 👉 Introduction to JSX
 👉 React Component
 👉 Component State and Props
 👉 Adding Style (CSS)
 👉 Functional and Class Components
 👉 React Lifecycle Methods
 👉 Virtual DOM
 👉 React Hooks
 👉 Custom Hooks
 👉 Context API
 👉 Synthetic Events
 👉 Routing
 👉 Data Flow (Redux/Flux)
 👉 Server-Side Rendering
 👉 Unit Testing
 👉 Jest & React Testing Library
 👉 Mocking Data
 👉 Understanding Webpack (Bundler)
 👉 Babel, env, Prettier, Linter

 JavaScript Round (45-60 min)
🍄 Chain Calculator
🍄 Promises in Sequence
🍄 Pipe and Compose
🍄 Array Polyfills (map, filter, reduce, etc.)
🍄 Prototype and Prototype Inheritance
🍄 Call, Apply, Bind
🍄 Flatten Array
🍄 Basic Debouncing
🍄 Basic Throttling
🍄 Event Emitter
🍄 Debouncing with Leading and Trailing Options
🍄 MapLimit (Controlling Concurrent Asynchronous Calls)
🍄 Cancelable Promise
🍄 Typeahead Search with LRU Cache
🍄 Document Comparison
🍄 Currying
🍄 Execute Tasks in Parallel
🍄 Sorting an Array 
🍄 Object Flattening
🍄 Deep Clone Object
🍄 JSON.stringify vs Manual Deep Copy
🍄 React DOM Rendering Process
🍄 Retry Promises N Times
🍄 Extended Version of Event Emitter
🍄 Promise.all
🍄 Promise.race
🍄 Promise.any
🍄 Promise.allSettled

Must Check Out 𝐒𝐨𝐧𝐢’𝐬 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 all for all above js question with solution
🔗 Link to Doc: https://lnkd.in/gXeiFJZT
🎟️ Coupon Code – SONIDOC10 for 10% discount

𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 𝐎𝐟𝐟𝐞𝐫𝐢𝐧𝐠𝐬:
✅ 34 Frequently Asked Frontend Interview Questions (15+ upcoming) with detailed solutions
✅ 50+ Code Snippets & Output-Based Questions
✅ Git Repositories Read Access
✅ 10+ JavaScript Machine Coding Questions

𝐔𝐩𝐜𝐨𝐦𝐢𝐧𝐠 𝐏𝐞𝐫𝐤𝐬:
🎯 15+ Additional JavaScript Interview Questions (Total: 50+)
🎯 70+ Most Commonly Asked LeetCode Questions for Frontend Engineers
🎯 Job Updates & Regular New Interview Questions
🎯 Exclusive Telegram Group Access for More Updates

🔗 Link to Doc: https://lnkd.in/gXeiFJZT
 🎟️ Coupon Code – SONIDOC10 for 10% discount
 
````js
 import React, { useState } from 'react';

const ChildComp = ({setTextOnParent}) => {

    const handleClick = () => {
        setTextOnParent('dummy text');
    }

    return (
        <button onClick={handleClick}>'click me'</button>
    )
}

const Parent = ({}) => {
    const [text, setText] = useState('text to update');

    return (
        <>
            <div>{text}</div>
            <ChildComp setTextOnParent={(val) => setText(val)} />
        </>

    )
}

export default Parent;

// JPMC cts internal

1. What is useEffect hooks in react and what if we don't pass the dependencies as second parameter
2. what is difference beetween promise and async await
3. how to save form data in the browser in the react application without calling api even when you close the browser data should be available
4. What is closure in javascipt.
5. Why do we use redux. how do we implement and have you used reduxToolkit
6. What is thunk and saga and how we use it, tell me senario where middleware used
7. how you will implement apicall in one component. where you will place api call and how many actions will be trigger if you dispatch an action from useEffect hooks.
8. how do you make website responsive which css framework do you use.
9. Did you use react with typescript or react with javascript
10. context api in react
11. how do you insure security while making api call
12. how refesh token is implemented 
13. for unit testing what you have used
14. how do you make deepcopy of and object apart from destructring and JSON.parse(JSON.stringyfy) any other method you could think. will it do deepcopy of nested object also?
15. what is useMemo amd useCallback
16. when do we use useRef tell me the use case

//JPMC client 
self intro
we will ask ques from html css js and react
Q1. suppose some form elements are there with different different type how you will implment using only html also make sure validation and required fields all shoud work only with html
Q1.1 for input type date how to set min and max date 
Q1.2 for email how to validate it properly with just html
Q2. What are symantic tags and why they are intoduced, what are the benefits using symantic tag
Q3. where you will use section, aside, article tags

Q4. Have you used flexbox, grid in css, Explain why how and what are the differences. tell some proprty for flex box
Q5. using flex box how you will place two tag one at complete left amd other in complete right
Q6. what is float in css. have used it
Q7. in above ques 5. how you will implement using float
Q8. when to use grid and flex and why.

Q9. what are the data structure have you used in js
Q9.1 tell me scenario where you have used Set
Q10. given an array how you will sort in ascending or dscending. don't use sort method.


Q11. have you used redux and redux toolkit. why you used redux and explain flow 
Q12. how you will share data in subling component in react
Q13. what is custom hooks in react
Q14. what are other ways to store data in react
Q15. you have used react with typescript or es6


wallmart ques pattern
make api call and filter it out with some condition. and list it out
how you will improve the performance/ useMemo useCallback
URL is like this pagination is displaying 5 data when you click button what change will be there in the url I mean what will be appended ?page=1&&size=10

filter arrayMethods etc.

//OpenText interview

Round 1
Self intro of each other
1. how you will get data from api in javascript
1.1 why you did not used .then method in async await. how you will print data just after calling fetchApi //function.//
2. how async code runs in javascript
3. what is event loop and how it works
4. what are the components in event loop
5. suppose there are 10000 lines of code with some async operation also if those async call get finish will they exacute before finishing all the line of code or not
6. how js know that it has to run async operation in between is there any event.
7. what is DOM and have you used it?
8. how you make website responsive what you have used any css framework or just css
9. given and array = [1,2,4,1,5,3,5,5,3,4,1,2] count the repeating number and store the repeating count in object against repeating number as property. like {1:2, 5:3} if possible sort also. what is the complexity of your code
10. how you make api security
11. how you have implemented authentication system. how you create token using data sent from front end like useid and password
11.1 where you store token in frontend
11.2 if you store in localstorage then is not there will be some risk of getting it theft
12. what is cross site scripting
13. what is xss. can you explain
14. what is cors and how you fix it
15. what you have used for calling api in you project
16. have you used restful api.
15. javascript is call by value or call by reference give example

Round 2 coding round
Self intro
1. have you used tyscript with react
2. in react how you make an api call implment the complete flow with redux also. explain in white board
3. given and api call it and list those 4 data in frontend in four column
4. 

Round 3

Sr. manager round just formal questions from my resume and some functional question

1. tell me some scenario where you faced challenges
2. are you an indivisual contribruter

Round 4

Engineering director

ROund 5 SHL assesment link
2 ques based on data structure 60min time

