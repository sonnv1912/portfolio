import { useMyProfile } from '@data/me';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { MdLocationPin } from 'react-icons/md';

const Education = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<div className={clsx('flex min-h-screen flex-col gap-8 p-8', 'md:p-12', 'lg:p-20')}>
			<p className='text-center font-eb-raleway text-4xl'>{t('common:degree').toUpperCase()}</p>

			<div>
				{me.education.map((item) => (
					<div
						key={item.label}
						className={clsx('relative ml-3 flex flex-wrap gap-8', 'md:gap-12')}
					>
						<div className='absolute bottom-0 left-[-29px] top-0 w-[1px] bg-woodsmoke-900' />

						<div className='absolute -left-8 size-2 rounded-full bg-black' />

						<div className='flex flex-col gap-5'>
							<div className='flex items-center gap-4'>
								<p>{item.time}</p>

								<div className='flex items-center gap-1'>
									<MdLocationPin />

									<p>{item.location}</p>
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<img
									src={item.image}
									className='size-14 rounded-xl object-cover'
								/>

								<div className='flex flex-col gap-2'>
									<p className='text-woodsmoke-400'>{item.label}</p>

									<p>{item.content}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export { Education };
