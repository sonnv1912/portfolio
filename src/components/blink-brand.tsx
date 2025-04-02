import { useMyProfile } from '@hooks/use-my-profile';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const BlinkBrand = () => {
	const me = useMyProfile();
	const [active, setActive] = useState(me.workedWith[0].href);

	useEffect(() => {
		const id = setInterval(() => {
			let result = Math.floor(Math.random() * me.workedWith.length);

			while (active === me.workedWith[result].href) {
				result = Math.floor(Math.random() * me.workedWith.length);
			}

			setActive(me.workedWith[result].href);
		}, 1500);

		return () => clearInterval(id);
	}, [active, me.workedWith]);

	return (
		<div className={clsx('flex flex-wrap items-center gap-4')}>
			{me.workedWith.map((brand) => (
				<a
					key={brand.href}
					href={brand.href}
					className={clsx(
						'rounded-md border border-woodsmoke-900 px-10 py-4',
						'duration-400 cursor-pointer grayscale transition-all hover:grayscale-0',
						{
							'grayscale-0': active === brand.href,
						},
					)}
				>
					<img
						alt=''
						src={brand.image}
						className='size-10'
					/>
				</a>
			))}
		</div>
	);
};

export { BlinkBrand };
