import Layout from 'components/layout';
import React, { useState } from 'react';
import zxcvbn  from 'zxcvbn';  

const Strength: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setScore(zxcvbn(event.target.value).score);
  };

  return (
    <Layout>
      <div className='bg-slate-300 h-screen'>
        <h1>Password Strength Tester</h1>
        <label>
          Password:
          <input type="password" value={password} onChange={handleChange} />
        </label>
        {score === 0 && <p>Weak</p>}
        {score === 1 && <p>Fair</p>}
        {score === 2 && <p>Good</p>}
        {score === 3 && <p>Strong</p>}
        {score === 4 && <p>Very Strong</p>}
      </div>
    </Layout>
  );
};

export default Strength;