import { useMyProfile } from '@hooks/use-my-profile';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<div
			className={clsx(
				'flex min-h-screen flex-col gap-16 bg-black p-8 text-white',
				'md:p-12',
				'lg:p-20',
			)}
		>
			<p className='text-center font-eb-raleway text-4xl'>{t('common:contact').toUpperCase()}</p>

			<div className={clsx('grid gap-12', 'md:grid-cols-1', 'lg:grid-cols-2')}>
				{me.contact.map((item) => (
					<a
						target='_blank'
						rel='noreferrer'
						href={item.href}
						key={item.label}
						className='flex items-center gap-3'
					>
						<img
							alt=''
							src={item.icon}
							className='size-12 rounded-full'
						/>

						<div className='flex flex-1 flex-col gap-1'>
							<p className='text-slate-500'>{item.label}</p>
							<p className='break-all font-semibold hover:underline'>{item.content}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export { Contact };
