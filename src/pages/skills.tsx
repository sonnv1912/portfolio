import { useMyProfile } from '@data/me';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { LuCode2 } from 'react-icons/lu';

const Skills = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<div
			className={clsx(
				'flex min-h-screen flex-col gap-16 p-8',
				'md:p-12',
				'lg:items-center lg:justify-center lg:p-20',
			)}
		>
			<p className='text-center font-eb-raleway text-4xl'>{t('common:skill').toUpperCase()}</p>

			<div className={clsx('grid grid-cols-1 gap-8', 'md:grid-cols-2', 'lg:gap-12')}>
				{me.skills.map((skill) => (
					<div key={skill.label}>
						<div className='flex items-center gap-2'>
							<div
								className={clsx(
									'flex size-7 items-center justify-center rounded-full',
									skill.textColor,
								)}
							>
								<LuCode2 />
							</div>

							<p className={clsx('text-md flex-1 font-semibold', 'md:text-lg')}>
								{skill.label}
							</p>
						</div>

						<div className='mt-5 flex flex-wrap items-center gap-3'>
							{skill.items.map((item) => (
								<div
									key={item}
									className={clsx(
										skill.textColor,
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
	);
};

export { Skills };
