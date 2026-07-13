// small component just to display one user
// keeping this separate makes App.jsx easier to read

// onDelete is optional - only manually added users will get a delete button
// (fetched users from the API don't have this passed in, so no button shows for them)
function UserCard({ name, email, company, onDelete }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Company: {company}</p>

      {onDelete && (
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  );
}

export default UserCard;