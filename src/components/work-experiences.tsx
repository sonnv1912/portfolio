import { me } from '@data/me';
import { MdLocationPin } from 'react-icons/md';

const WorkExperience = () => {
	return (
		<div
			id='work-experiences'
			className='min-h-screen bg-black lg:px-40 lg:pt-20'
		>
			<p className='text-center font-eb-raleway text-4xl text-white'>Work Experiences</p>

			<div className='mt-20 text-white'>
				{me.experiences.map((item) => (
					<div
						key={item.appName}
						className='relative flex gap-12'
					>
						<div className='w-[1px] bg-woodsmoke-900' />

						<div className='absolute left-[-3px] size-2 rounded-full bg-white' />

						<div className='mr-20 flex flex-col gap-5'>
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

						<div className='flex flex-1 flex-col gap-4'>
							<div className='flex'>
								<p className='w-56 font-semibold text-woodsmoke-400'>
									Project Description:{' '}
								</p>

								<p className='flex-1 text-justify leading-8'>{item.appDescription}</p>
							</div>

							<div className='flex'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Team Size: </p>

								<p className='flex-1'>{item.teamSize}</p>
							</div>

							<div className='flex'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Accomplishments: </p>

								<p className='flex-1 leading-8'>{item.accomplishments}</p>
							</div>

							<div className='flex'>
								<p className='w-56 font-semibold text-woodsmoke-400'>Technologies: </p>

								<p className='flex-1'>{item.technologies}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export { WorkExperience };
