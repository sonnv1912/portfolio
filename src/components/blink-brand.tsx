import { me } from '@data/me';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const BlinkBrand = () => {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			let result = Math.floor(Math.random() * me.workedWith.length) + 1;

			while (active === result) {
				result = Math.floor(Math.random() * me.workedWith.length) + 1;
			}

			setActive(result);
		}, 1500);

		return () => clearInterval(id);
	}, [active]);

	return (
		<div className='flex items-center gap-4'>
			{me.workedWith.map((brand) => (
				<a
					key={brand.id}
					href={brand.href}
					className={clsx(
						'rounded-md border border-woodsmoke-950 px-10 py-4',
						'duration-400 cursor-pointer grayscale transition-all hover:grayscale-0',
						{
							'grayscale-0': active === brand.id,
						},
					)}
				>
					<img
						src={brand.image}
						className='size-10'
					/>
				</a>
			))}
		</div>
	);
};

export { BlinkBrand };
