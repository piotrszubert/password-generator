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
        {score === 0 && <p className='text-red-600'>Weak</p>}
        {score === 1 && <p className='text-orange-600'>Fair</p>}
        {score === 2 && <p className='text-green-600'>Good</p>}
        {score === 3 && <p className='text-green-600'>Strong</p>}
        {score === 4 && <p className='text-green-600'>Very Strong</p>}
      </div>
    </Layout>
  );
};

export default Strength;