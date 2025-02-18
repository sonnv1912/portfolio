import { useMyProfile } from '@data/me';
import { DefaultLayout } from '@layouts/default';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { LuCode2 } from 'react-icons/lu';

const Skills = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<DefaultLayout>
			<div
				className={clsx(
					'flex min-h-screen flex-col gap-16',
					'md:p-12',
					'lg:items-center lg:justify-center lg:p-20',
				)}
			>
				<p className='text-center font-eb-raleway text-4xl'>
					{t('common:skills').toUpperCase()}
				</p>

				<div className={clsx('grid grid-cols-1 gap-8', 'md:grid-cols-2', 'lg:gap-12')}>
					{me.skills.map((skills) => (
						<div key={skills.label}>
							<div className='flex items-center gap-2'>
								<div
									className={clsx(
										'flex size-7 items-center justify-center rounded-full',
										'bg-woodsmoke-800 text-white hover:bg-woodsmoke-600 hover:text-white',
									)}
								>
									<LuCode2 />
								</div>

								<p className={clsx('text-md flex-1 font-semibold', 'md:text-lg')}>
									{skills.label}
								</p>
							</div>

							<div className='mt-5 flex flex-wrap items-center gap-3'>
								{skills.items.map((item) => (
									<div
										key={item}
										className={clsx(
											'bg-woodsmoke-800 text-white hover:bg-woodsmoke-600 hover:text-white',
											'cursor-pointer rounded-lg px-5 py-3 transition-all duration-300',
										)}
									>
										{item}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</DefaultLayout>
	);
};

export { Skills };
