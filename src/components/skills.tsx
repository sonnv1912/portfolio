import { me } from '@data/me';
import clsx from 'clsx';
import { LuCode2 } from 'react-icons/lu';

const Skills = () => {
	return (
		<div
			id='skills'
			className='min-h-screen lg:px-40 lg:pt-20'
		>
			<p className='text-center font-eb-raleway text-4xl'>Skills</p>

			<div className='mt-20 grid grid-cols-2 gap-12'>
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

							<p className='text-lg font-semibold'>{skill.label}</p>
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
