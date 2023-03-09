import Link from 'next/link';
interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Password Generator', href: '/password', current: false },
  { name: 'Password Strength Tester', href: '/strength', current: false },
];

const Navigation = () => {

  return (
		<div className='flex justify-evenly'>
			{navigation.map((item) => (
				<Link
				key={item.name}
				href={item.href}
				className={`${
					item.current ? 'font-medium text-gray-900' : 'text-gray-500'
				} hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
				aria-current={item.current ? 'page' : undefined}
				>
				{item.name}
				</Link>
			))}
		</div>
	);
};
      
export default Navigation;