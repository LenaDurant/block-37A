import { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const handleSubmit = async(event) => {
    event.preventDefault(); 
  try {
    const response = await fetch('${DATABASE_URL}',
    {  
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });

    const result = await response.json();
    setUsername("");
    setPassword("");
    setError("");
    console.log(result);
  } catch (error) {
    setError(error.message);
}
}
  
return (
  <>
   <h2>Sign Up!</h2>
   {error && <p>There is an Error!</p>}

    <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>

        <label>
          Password: <input type="password" value= {password} onChange={(event) => setPassword(event.target.value)} />
        </label>

        <button>Submit</button>
    </form>
  </>
);
};
  export default SignUpForm;