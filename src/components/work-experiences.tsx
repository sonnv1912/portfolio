import { me } from '@data/me';
import clsx from 'clsx';
import { MdLocationPin } from 'react-icons/md';

const WorkExperience = () => {
	return (
		<div
			className={clsx(
				'flex min-h-screen flex-col gap-16 bg-black p-8 text-white',
				'md:p-12',
				'lg:p-20',
			)}
		>
			<p className='text-center font-eb-raleway text-4xl'>Work Experiences</p>

			<div>
				{me.experiences.map((item) => (
					<div
						key={item.appName}
						className={clsx('relative ml-3 flex flex-wrap gap-8', 'md:gap-12')}
					>
						<div className='absolute bottom-0 left-[-29px] top-0 w-[1px] bg-woodsmoke-900' />

						<div className='absolute -left-8 size-2 rounded-full bg-white' />

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
									src={item.appLogo}
									className='size-14 rounded-xl object-cover'
								/>

								<div className='flex flex-col gap-2'>
									<p className='text-woodsmoke-400'>{item.position}</p>

									<p>{item.appName}</p>
								</div>
							</div>
						</div>

						<div className={clsx('flex w-full flex-col gap-8')}>
							<div className='flex flex-wrap'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Team Size: </p>

								<p className='flex-1'>{item.teamSize}</p>
							</div>

							<div className='flex flex-wrap'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Description: </p>

								<p
									className={clsx(
										'w-full break-all pt-2 leading-8',
										'sm:w-full sm:pt-2',
										'lg:w-auto lg:flex-1 lg:pt-0',
									)}
								>
									{item.appDescription}
								</p>
							</div>

							<div className='flex flex-wrap'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Responsibilities: </p>

								<ul
									className={clsx(
										'w-full list-disc break-all pl-4 pt-2 leading-8',
										'sm:w-full sm:pt-2',
										'lg:w-auto lg:flex-1 lg:pt-0',
									)}
								>
									{item.responsibilities.map((item) => (
										<li
											className={clsx('break-all leading-8')}
											key={item.label}
										>
											<span className='text-blue-400 underline'>{item.label}</span>:{' '}
											{item.content}
										</li>
									))}
								</ul>
							</div>

							<div className='flex flex-wrap'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Achievement: </p>

								<p className={clsx('w-full break-all leading-8', 'lg:w-auto lg:flex-1')}>
									{item.accomplishments}
								</p>
							</div>

							<div className='flex flex-wrap'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Technologies: </p>

								<p className={clsx('w-full break-all leading-8', 'lg:w-auto lg:flex-1')}>
									{item.technologies}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export { WorkExperience };
