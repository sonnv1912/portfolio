import clsx from 'clsx';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLocationPin } from 'react-icons/md';

type Props = {
	data: {
		company: string;
		position: string;
		appLogo: string;
		appName: string;
		time: string;
		location: string;
		appDescription: string;
		teamSize: number;
		responsibilities: {
			label: string;
			content: string;
		}[];
		technologies: string;
	};
};

const ProjectItem = ({ data }: Props) => {
	const [showMore, setShowMore] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const { t } = useTranslation();

	return (
		<div
			className={clsx('relative ml-3 flex flex-wrap gap-8', {
				'pb-12': !showMore,
				'pb-20': showMore,
			})}
		>
			<div className='absolute bottom-0 left-[-29px] top-0 w-[1px] bg-woodsmoke-900' />

			<div className='absolute -left-8 size-2 rounded-full bg-white' />

			<div className='flex flex-col gap-5'>
				<div className='flex items-center'>
					<p className='w-56'>{data.time}</p>

					<div className='flex items-center gap-1'>
						<MdLocationPin />

						<p>{data.location}</p>
					</div>
				</div>

				<div className='flex items-center gap-4'>
					<img
						src={data.appLogo}
						alt=''
						className='size-14 rounded-xl object-cover'
					/>

					<div className='flex flex-col gap-2'>
						<p className='text-woodsmoke-400'>{data.position}</p>

						<p>{data.appName}</p>
					</div>
				</div>
			</div>

			<div className={clsx('relative flex w-full flex-col gap-8')}>
				<div className='flex flex-wrap'>
					<p className='w-56 font-semibold text-woodsmoke-400'>
						{t('page:portfolio.projects.company')}:
					</p>

					<p className='flex-1'>{data.company}</p>
				</div>

				<div className='flex flex-wrap'>
					<p className='w-56 font-semibold text-woodsmoke-400'>
						{t('page:portfolio.projects.team_size')}:
					</p>

					<p className='flex-1'>{data.teamSize}</p>
				</div>

				<div className='flex flex-wrap'>
					<p className='w-56 font-semibold text-woodsmoke-400'>{t('common:description')}:</p>

					<p
						className={clsx(
							'w-full break-all pt-2 leading-8',
							'sm:w-full sm:pt-2',
							'lg:w-auto lg:flex-1 lg:pt-0',
						)}
					>
						{data.appDescription}
					</p>
				</div>

				<motion.div
					ref={ref}
					className='flex flex-col gap-8 overflow-hidden'
					transition={{
						duration: 0.8,
					}}
					initial={{
						height: 0,
						opacity: 0,
					}}
					animate={{
						height: showMore ? 'auto' : 0,
						opacity: showMore ? 1 : 0,
					}}
				>
					<div className='flex flex-wrap'>
						<p className='w-56 font-semibold text-woodsmoke-400'>
							{t('page:portfolio.projects.responsibility')}:
						</p>

						<div
							className={clsx(
								'flex w-full flex-col gap-3 break-all pt-2 leading-8',
								'sm:w-full sm:pt-2',
								'lg:w-auto lg:flex-1 lg:pt-0',
							)}
						>
							{data.responsibilities.map((responsibility) => (
								<p
									className={clsx('break-all leading-8')}
									key={responsibility.label}
								>
									- {responsibility.content}
								</p>
							))}
						</div>
					</div>

					<div className='flex flex-wrap'>
						<p className='w-56 font-semibold text-woodsmoke-400'>
							{t('page:portfolio.projects.technologies')}:
						</p>

						<div
							className={clsx(
								'flex w-full flex-col gap-3 break-all pt-2 leading-8',
								'sm:w-full sm:pt-2',
								'lg:w-auto lg:flex-1 lg:pt-0',
							)}
						>
							{data.technologies}
						</div>
					</div>
				</motion.div>

				<div
					className={clsx('absolute left-0 right-0 flex items-center justify-center', {
						'-bottom-6': !showMore,
						'-bottom-12': showMore,
					})}
					onClick={() => {
						setTimeout(() => {
							ref.current?.scrollIntoView();
						}, 200);
					}}
				>
					<div
						className={clsx(
							'rounded-full px-4 py-2 text-sm',
							'cursor-pointer bg-woodsmoke-800 text-white hover:bg-woodsmoke-600',
						)}
						onClick={() => {
							setShowMore((prev) => !prev);
						}}
					>
						{showMore ? t('common:action.view_less') : t('common:action.view_more')}
					</div>
				</div>
			</div>
		</div>
	);
};

export { ProjectItem };
