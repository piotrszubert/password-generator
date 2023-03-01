import React, { useState } from 'react';
import generatePassword from 'generate-password';
import CopyButton from 'components/copyButton'

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
    <div className='bg-slate-300 h-screen'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32'>
            <div className="flex flex-col gap-4">    
                <h1 className='text-5xl'>Password Generator</h1>
                <div>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={generate}>
                            Generate Password
                    </button>
                </div>
                <div>
                    <input type="text" value={password} readOnly />
                    <CopyButton text={password} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Password;