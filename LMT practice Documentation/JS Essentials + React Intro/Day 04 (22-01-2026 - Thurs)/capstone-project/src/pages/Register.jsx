import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>📝 Register</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>Username: {username}</p>
    </div>
  );
}

export default Register;
