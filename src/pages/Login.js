import {useState} from 'react'

function Login() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => console.log(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Login