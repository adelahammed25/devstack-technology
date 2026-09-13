Name of your project : DevStack Technology
Description : It is a simple landing page created with React. In the page there are Navbar,Hero Section, Technology Selecting section and Footer.
Technology Used:
React.js
Tailwind CSS, DaisyUI
TypeScript / JavaScript (ES6+)
React-Toastify (NPM Package)
JSON (for technology data)
Vite (build tool)

3 features about the project:

1. We can select the Technology and selected technology will show in the right sidebar
2. We can remove the single or all technology from sidebar
3. It is a responsive website



Questions And Answers:

What is JSX, and why is it used in React?
Ans: It is an syntax like html which we use in react to build the UI.

What is the difference between props and state?
Ans:  In props data can pass from parent to child and state can modify the data in the component

What does the useState hook do, and where did you use it in this project?
Ans: It basically store the data. And in this project when we click the button Add to Stack it holds the card as selected.

What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: It runs a process after the loading of the component. Here it fetched the json data after the loading of the component.
 
Why does every item in a .map() list need a unique key prop?
Ans: So that React can mark each item separately 

What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: It update the Ui according to the condition. As example in this project when some one clicks on add to stack button the button become disabled and the text changed.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: We pass data from parent to child using props. And child also can send data back to parent by using a function from props.