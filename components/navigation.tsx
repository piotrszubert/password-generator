import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItem {
	name: string;
	href: string;
}

const navigation: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Password Generator', href: '/password' },
	{ name: 'Password Strength Tester', href: '/strength' },
];

const Navigation = () => {
	const router = useRouter();

	return (
		<div className='flex justify-evenly'>
			{navigation.map((item) => (
				<Link
					key={item.name}
					href={item.href}
					className={`${router.pathname === item.href ? 'font-medium text-gray-900' : 'text-gray-500'
						} hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
					aria-current={router.pathname === item.href ? 'page' : undefined}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default Navigation;
