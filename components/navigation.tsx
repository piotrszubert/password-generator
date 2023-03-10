// import Link from 'next/link';
// import { useRouter } from 'next/router';

// interface NavItem {
// 	name: string;
// 	href: string;
// }

// const navigation: NavItem[] = [
// 	{ name: 'Home', href: '/' },
// 	{ name: 'Password Generator', href: '/password' },
// 	{ name: 'Password Strength Tester', href: '/strength' },
// ];

// const Navigation = () => {
// 	const router = useRouter();

// 	return (
// 		<div className='flex justify-evenly'>
// 			{navigation.map((item) => (
// 				<Link
// 					key={item.name}
// 					href={item.href}
// 					className={`${router.pathname === item.href ? 'font-medium text-gray-900' : 'text-gray-500'
// 						} hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
// 					aria-current={router.pathname === item.href ? 'page' : undefined}
// 				>
// 					{item.name}
// 				</Link>
// 			))}
// 		</div>
// 	);
// };

// export default Navigation;
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-gray-800'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
						<button
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
							aria-expanded='false'
							onClick={toggleMenu}
						>
							<span className='sr-only'>Open main menu</span>
							{!isOpen ? (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M4 6h16M4 12h16M4 18h16' />
								</svg>
							) : (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M6 18L18 6M6 6l12 12' />
								</svg>
							)}
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center lg:items-stretch lg:justify-start'>
						<div className='flex-shrink-0'>
							<Link className='text-white font-bold text-2xl' href='/'>
								Logo
							</Link>
						</div>
						<div className='hidden lg:block lg:ml-6'>
							<div className='flex space-x-4'>
								<Link href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
									Home
								</Link>
								<Link href='/about' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
									About
								</Link>
								<Link href='/contact' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className='lg:hidden'>
					<div className='px-2 pt-2 pb-3 space-y-1' >
						<Link href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							Home
						</Link>
						<Link href='/about' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							About
						</Link>
						<Link href='/contact' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;