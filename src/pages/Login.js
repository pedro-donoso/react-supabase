import { useState } from "react";
import { client } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");

  const handleSumit = async (e) => {
    e.preventDefault();

    try {
      const result = await client.auth.signUp({
        email,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
