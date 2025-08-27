## Assignment 5 Q&A

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById : Its select single element using unique id .and return by
  object if element is found else return null

- getElementsByClassName : Its select all element using the className and return
  by HTMLCollection and its like a array type object .

- querySelector / querySelectorAll : querySelector return the first matched
  element by the css selector and querySelectorAll return the all matched
  element using nodelist .

in short getElementById used to get the specific element by unique id and the
getElementsByClassName used to get all element by only classname and
querySelector get first matched element using css selector . querySelectorAll
return all matched element by the css selector and return a nodelist .in
querySelector / querySelectorAll are not live .

## 2. How do you create and insert a new element into the DOM?

- Create a new element using the `document.createElement()` function.
- To insert the newly created element, first select the **parent element** where
  we want to append it.
- Use `appendChild()` to add it into the DOM.

### Example

```javascript
const parent = document.getElementById('parentId');
const newEl = document.createElement('h1');
newEl.textContent = "We are Hero Student";
parent.appendChild(newEl);

```
## 3.What is Event Bubbling and how does it work?
- Event bubbling is like when we click or triggered event then it will goes upward to his parent , and it continious this unless stop it or stop in when reached DOM tree.like if click a button then its bubble to button parent and then button grand parent .

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a system where we call an event by parent without sepaertly calling child event . manage multiple child event by this single parent event listner its usefull for less and clean code .

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() this will prevent the browser defualt action ,like when we submit a form then its reloded when we use preventDefault() then it will prevent the relode. 

- stopPropagation() is used to stop the event bubbling ,its not prevent the browser default action.