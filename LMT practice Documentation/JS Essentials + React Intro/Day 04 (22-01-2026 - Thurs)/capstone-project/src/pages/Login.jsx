

import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>🔐 Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Entered Email: {email}</p>
    </div>
  );
}

export default Login;

