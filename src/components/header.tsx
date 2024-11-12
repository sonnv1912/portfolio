import clsx from 'clsx';
import { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';
import { HeaderItem } from './header-item';

const tabs = [
	{
		id: 1,
		label: 'Me',
		icon: BiSolidUser,
		href: '#about-me',
	},
	{
		id: 2,
		label: 'Skills',
		icon: GiSkills,
		href: '#skills',
	},
	{
		id: 3,
		label: 'Work',
		icon: MdWork,
		href: '#work-experiences',
	},
	{
		id: 4,
		label: 'Contact',
		icon: FaAddressCard,
		href: '#contact',
	},
];

const Header = () => {
	const [active, setActive] = useState(1);

	return (
		<div
			className={clsx(
				'flex h-screen flex-col gap-2 overflow-auto bg-woodsmoke-950 p-3 text-woodsmoke-200',
			)}
		>
			{tabs.map((tab) => (
				<HeaderItem
					key={tab.id}
					active={active === tab.id}
					data={tab}
					onPress={() => setActive(tab.id)}
				/>
			))}

			{/* <div className='flex items-center gap-4 px-8'>
				<a
					href='https://www.facebook.com/profile.php?id=100040068023039'
					target='_blank'
				>
					<ImFacebook2 className='size-5' />
				</a>

				<a
					href='https://github.com/Chuazz'
					target='_blank'
				>
					<ImGithub className='size-5' />
				</a>
			</div> */}
		</div>
	);
};

export { Header };
