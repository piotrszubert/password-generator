import Layout from 'components/layout';
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

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
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32'>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl mb-10'>Password Strength Tester</h1>
            <input type="password"
              value={password}
              className="flex-grow border border-slate-400 rounded-md max-w-sm mx-auto py-2 px-4 bg-gray-100 outline-none"
              onChange={handleChange}
            />
            {score === 0 && <p className='text-red-600'>Weak</p>}
            {score === 1 && <p className='text-orange-600'>Fair</p>}
            {score === 2 && <p className='text-green-600'>Good</p>}
            {score === 3 && <p className='text-green-600'>Strong</p>}
            {score === 4 && <p className='text-green-600'>Very Strong</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Strength;