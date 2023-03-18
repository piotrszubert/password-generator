import React, { useState } from 'react';
import generatePassword from 'generate-password';
import CopyButton from 'components/copyButton'
import Layout from 'components/layout';

const Password: React.FC = () => {
	const [password, setPassword] = useState<string>('');
	const [length, setLength] = useState<number>(12);
	const [numbers, setNumbers] = useState<boolean>(true);
	const [symbols, setSymbols] = useState<boolean>(false);
	const [uppercase, setUppercase] = useState<boolean>(true);
	const [lowercase, setLowercase] = useState<boolean>(true);

	const generate = () => {
		const password = generatePassword.generate({
			length: length,
			numbers: numbers,
			symbols: symbols,
			uppercase: uppercase,
			lowercase: lowercase,
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
							<label htmlFor="password-length">Password Length:</label>
							<input type="number" id="password-length" value={length} onChange={(e) => setLength(Number(e.target.value))} />
						</div>
						<div>
							<label htmlFor="password-numbers">Include Numbers:</label>
							<input type="checkbox" id="password-numbers" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
						</div>
						<div>
							<label htmlFor="password-symbols">Include Symbols:</label>
							<input type="checkbox" id="password-symbols" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
						</div>
						<div>
							<label htmlFor="password-uppercase">Include Uppercase Letters:</label>
							<input type="checkbox" id="password-uppercase" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
						</div>
						<div>
							<label htmlFor="password-lowercase">Include Lowercase Letters:</label>
							<input type="checkbox" id="password-lowercase" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
						</div>
						<div>
						<button
							className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold py-2 px-4 rounded"
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
