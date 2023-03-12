import React, { useState } from 'react';
import generatePassword from 'generate-password';
import CopyButton from 'components/copyButton'
import Layout from 'components/layout';

const Password: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const generate = () => {
    const password = generatePassword.generate({
      length: 12,
      numbers: true,
      symbols: false,
      uppercase: true,
      lowercase: true,
      excludeSimilarCharacters: true,
    });
    setPassword(password);
  };

  return (
    <Layout>
      <div className='bg-slate-300 h-screen'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32'>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl mb-10'>Password Generator</h1>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 borde rounded-md"
                onClick={generate}>
                Generate Password
              </button>
            </div>
            <div className="max-w-sm mx-auto flex items-center justify-between py-2 px-4 bg-gray-100 rounded-md">
              <input type="text" value={password} readOnly className="flex-grow bg-transparent outline-none" />
              <CopyButton text={password} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Password;