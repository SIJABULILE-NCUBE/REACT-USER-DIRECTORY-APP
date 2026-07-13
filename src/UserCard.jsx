// small component just to display one user
// keeping this separate makes App.jsx easier to read

function UserCard({ name, email, company }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
    </div>
  );
}

export default UserCard;
