import { me } from '@data/me';
import clsx from 'clsx';
import { HiOutlineDownload } from 'react-icons/hi';
import { BlinkBrand } from './blink-brand';

const AboutMe = () => {
	return (
		<div
			id='about-me'
			className='flex min-h-screen flex-col bg-black text-white lg:px-40 lg:pb-12'
		>
			<div className='flex flex-1 items-center lg:gap-16'>
				<div className='flex flex-1 flex-col gap-6'>
					<p className='flex-1 font-eb-raleway text-5xl'>{me.name}</p>

					<p
						className='text-justify leading-8'
						dangerouslySetInnerHTML={{ __html: me.shortDesc }}
					/>

					<a
						href={me.cv}
						className={clsx(
							'w-fit rounded-lg border border-green-400 bg-green-500 px-4 py-2 shadow-lg',
							'flex items-center gap-2 shadow-green-400 hover:bg-green-600',
						)}
					>
						<HiOutlineDownload className='size-5' />

						<p>My CV</p>
					</a>
				</div>

				<img
					src={me.image}
					className='size-80 rounded-full object-cover'
					alt='me'
				/>
			</div>

			<div>
				<p className='mb-5'>Worked with</p>

				<BlinkBrand />
			</div>
		</div>
	);
};

export { AboutMe };
