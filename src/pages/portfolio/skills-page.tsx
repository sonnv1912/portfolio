import { Page } from '@components/layouts/page';
import { useMyProfile } from '@hooks/use-my-profile';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { LuCode2 } from 'react-icons/lu';

export const SkillsPage = () => {
	const me = useMyProfile();
	const { t } = useTranslation();

	return (
		<Page className='lg:items-center'>
			<p className='text-center font-eb-raleway text-4xl'>
				{t('page:portfolio.skills.title').toUpperCase()}
			</p>

			<div className={clsx('grid grid-cols-1 gap-8', 'md:grid-cols-2', 'lg:gap-12')}>
				{me.skills.map((skills) => (
					<div key={skills.label}>
						<div className='flex items-center gap-2'>
							<div
								className={clsx(
									'flex size-7 items-center justify-center rounded-full',
									'bg-woodsmoke-800 text-white hover:bg-woodsmoke-600',
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
								<a
									key={item.label}
									href={item.link}
									target='_blank'
									rel='noreferrer'
									data-tooltip-id='tooltip'
									data-tooltip-content={item.desc}
									data-tooltip-place='bottom-start'
									className={clsx(
										'bg-woodsmoke-800 text-white hover:bg-blue-600',
										'cursor-pointer rounded-lg px-5 py-3 transition-all duration-300',
									)}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</Page>
	);
};
