import { useState } from "react";

// BONUS: a simple form to add a new user
// name and email are both controlled inputs - their value comes from
// state, and typing updates that state through onChange

function NewUserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    // stop the page from refreshing, which is the default form behaviour
    event.preventDefault();

    // don't add empty users
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in both name and email");
      return;
    }

    // send the new user back up to App.jsx
    onAddUser({ name: name, email: email });

    // clear the form after submitting
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-user-form">
      <h2>Add a New User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">Add User</button>
    </form>
  );
}

export default NewUserForm;
