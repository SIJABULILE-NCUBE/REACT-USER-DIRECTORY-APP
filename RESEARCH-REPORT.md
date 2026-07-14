# Research Report: Fetching Data, Forms & Controlled Components

**Sijabulile Ncube**
13/07/2026

## Fetching Data

### What is data fetching?

When we talk about fetching data in React, we basically mean getting information from somewhere else, usually a server, instead of writing that information straight into our code. So instead of hardcoding a list of names into a component, the app sends a request out and gets the actual data back.

### Why do React apps fetch data?

React apps fetch data because most real apps aren't static. In my current role as , one thing that's obvious there is that data changes constantly: client info, risk scores, account details, none of that stays the same for long. Apps need to reflect that. If we hardcoded everything, the app would just be stuck showing old, fake info forever.

### What is an API?

An API is basically the middleman that lets our app talk to a server without needing to know how that server works behind the scenes. It's a set of rules for making requests and getting responses back, usually in JSON. You send a request to an endpoint (a specific URL) and the server sends back the data you asked for.

### How does useEffect help when fetching data?

This is where `useEffect` comes in. In React you can't just fetch data directly while the component is rendering, that would cause it to fetch over and over in an endless loop. `useEffect` lets us run the fetch after the component has loaded, and only when we want it to run again (or not at all, if we leave the dependency array empty).

### Code Example

Here's a simple example that fetches one to-do item from a test API and shows its title on the screen:

```jsx
import { useState, useEffect } from "react";

function Greeting() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.title);
      });
  }, []);

  return <p>{message}</p>;
}

export default Greeting;
```

When this component loads, `useEffect` runs the fetch straight away since the dependency array is empty. The fetch goes out to the API, gets a response back, and we turn that response into JSON using `.then((res) => res.json())`. Once we have the actual data, we save it into state with `setMessage(data.title)`, and React automatically re-renders the component to show it.

Here's a slightly bigger example, fetching a list of users instead of just one item:

```jsx
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

This one works the same way, except now the data coming back is a list, so we loop through it with `.map()` and display each user's name as a list item. This is closer to what I actually use in the User Directory app for Part 2, just on a smaller scale.

## Forms

### What is a form?

A form is basically a way for a user to enter or select information and send it somewhere. Login pages, search bars, signup screens, all of those are forms.

### Why are forms important?

Forms matter because they're the main way users actually interact with an app instead of just viewing it. Without forms an app can only display things, it can't collect anything back from the person using it.

### Purpose of input, button, textarea, and select

- `input` is used for short pieces of text, like a name, email or search term
- `button` is used to trigger an action, like submitting a form or running a search
- `textarea` works like input but is meant for longer text, like a message or comment
- `select` gives the user a dropdown list to pick one option from

### Code Example

```jsx
function SimpleForm() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <textarea placeholder="Message"></textarea>
      <select>
        <option>Student</option>
        <option>Developer</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
```

## Controlled Components

### What are controlled components?

A controlled component is a form element, like an input, whose value is managed by React state instead of being managed by the browser on its own. So the input doesn't just hold its own value quietly, React state holds it, and the input just shows whatever that state currently is.

### Why are they used?

We use controlled components because they give us full control over what's happening as the user types. We can filter a list instantly, validate input, clear a field programmatically, all of that becomes easy once React is the one tracking the value.

### Explaining value, onChange, and useState

- `value` connects the input to that state, so the input always shows the current state
- `useState` creates a variable that React keeps track of and re-renders around when it changes
- `onChange` runs every time the user types something, updating the state with the new value

### Code Example

```jsx
function NameInput() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```