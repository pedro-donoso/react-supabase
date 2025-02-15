import {useState} from 'react'

function Login() {
  const [email, setEmail] = useState('');

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(email);
  }

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
  )
}

export default Login