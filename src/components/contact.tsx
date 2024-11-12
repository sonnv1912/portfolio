import { me } from '@data/me';
import clsx from 'clsx';

const Contact = () => {
	return (
		<div
			id='contact'
			className='min-h-screen lg:px-40 lg:pt-20'
		>
			<p className='text-center font-eb-raleway text-4xl'>Contact</p>

			<div className='mt-20 grid grid-cols-2 gap-12'>
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

							<div className='flex flex-col gap-1'>
								<p className='text-slate-500'>{item.label}</p>
								<p className='font-semibold hover:underline'>{item.content}</p>
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
							className='flex items-center gap-4'
						>
							<img
								src={item.icon}
								className='size-10'
							/>

							<div className='flex flex-col gap-1'>
								<p className='text-slate-500'>{item.label}</p>
								<p className='font-semibold hover:underline'>{item.content}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export { Contact };
