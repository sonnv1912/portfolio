import { useMyProfile } from '@hooks/use-my-profile';
import { DefaultLayout } from '@layouts/default';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<DefaultLayout>
			<div
				className={clsx(
					'flex min-h-screen flex-col gap-16 bg-black p-8 text-white',
					'md:p-12',
					'lg:p-20',
				)}
			>
				<p className='text-center font-eb-raleway text-4xl'>
					{t('common:contact').toUpperCase()}
				</p>

				<div className={clsx('grid grid-cols-1 gap-12', 'sm:grid-cols-2')}>
					<div className='flex flex-col gap-7'>
						{me.contact.map((item) => (
							<a
								target='_blank'
								href={item.href}
								key={item.label}
								className='flex items-center gap-4'
							>
								<div
									className={clsx(
										'flex size-12 items-center justify-center rounded-full bg-slate-200',
									)}
								>
									<item.icon className='size-6 text-slate-500' />
								</div>

								<div className='flex flex-1 flex-col gap-1'>
									<p className='text-slate-500'>{item.label}</p>
									<p className='flex-1 break-all font-semibold hover:underline'>
										{item.content}
									</p>
								</div>
							</a>
						))}
					</div>

					<div className='flex flex-col gap-7'>
						{me.links.map((item) => (
							<a
								target='_blank'
								href={item.href}
								key={item.label}
								className='flex items-center gap-3'
							>
								<img
									src={item.icon}
									className='size-12'
								/>

								<div className='flex flex-1 flex-col gap-1'>
									<p className='text-slate-500'>{item.label}</p>
									<p className='break-all font-semibold hover:underline'>{item.content}</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export { Contact };
