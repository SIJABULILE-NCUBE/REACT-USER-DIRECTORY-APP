import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import NewUserForm from "./NewUserForm";
import "./App.css";

function App() {
  // this will hold all the users we get back from the API
  const [users, setUsers] = useState([]);

  // this holds whatever the user is typing in the search box
  const [searchTerm, setSearchTerm] = useState("");

  // just so we can show a loading message while we wait for the fetch
  const [loading, setLoading] = useState(true);

  // this will hold any users we add ourselves using the bonus form
  const [newUsers, setNewUsers] = useState([]);

  // true = dark mode, false = light mode
  // starting with light mode by default
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // useEffect runs this code once, when the component first loads
  // (empty array [] at the end means "only run once")
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("something went wrong fetching users:", error);
        setLoading(false);
      });
  }, []);

  // this function gets called every time someone types in the search box
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // function to add a new user from the bonus form to the top of the list
  function handleAddUser(newUser) {
    setNewUsers([newUser, ...newUsers]);
  }

  // function to remove a manually-added user from the list
  // filter() returns a new array without the one at "indexToRemove"
  function handleDeleteUser(indexToRemove) {
    setNewUsers(newUsers.filter((user, index) => index !== indexToRemove));
  }

  // filter the users based on what's typed in the search box
  // toLowerCase() so search isn't case sensitive
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="header-row">
        <h1>User Directory</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* bonus part - form to add a new user */}
      <NewUserForm onAddUser={handleAddUser} />

      {/* the search box - this is a controlled component
          because its value comes from state (searchTerm)
          and updates state (setSearchTerm) on every keystroke */}
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-box"
      />

      {loading && <p>Loading users...</p>}

      {/* show new users added by the form first, then the fetched users */}
      <div className="user-list">
        {newUsers.map((user, index) => (
          <UserCard
            key={"new-" + index}
            name={user.name}
            email={user.email}
            company="Added manually"
            onDelete={() => handleDeleteUser(index)}
          />
        ))}

        {!loading && filteredUsers.length === 0 && newUsers.length === 0 && (
          <p>No users found.</p>
        )}

        {!loading && filteredUsers.length === 0 && newUsers.length > 0 && searchTerm !== "" && (
          <p>No users found.</p>
        )}

        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            company={user.company.name}
          />
        ))}
      </div>

      <footer className="footer">
        <p>
          Built by Sijabulile Ncube -{" "}
          <a
            href="https://github.com/SIJABULILE-NCUBE"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;