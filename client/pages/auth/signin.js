import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signin', {email, password})
      console.log(response)
    } catch (error) {
      console.error(error.response.data)
      setError(error.response.data)
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign IN</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      {error.error && <div className='alert alert-danger'>
        <h4>Ooops....</h4>
        {error.error}
      </div>}
      <button className="btn btn-primary">Sign In</button>
    </form>
  );
};
