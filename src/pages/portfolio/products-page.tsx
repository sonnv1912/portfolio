import { useMyProfile } from '@hooks/use-my-profile';
import { useNavigator } from '@hooks/use-navigator';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const ProductsPage = () => {
	const me = useMyProfile();
	const { t } = useTranslation();
	const { setQuery } = useNavigator();

	return (
		<div className={clsx('flex min-h-screen flex-col gap-16 p-8', 'md:p-12', 'lg:p-20')}>
			<p className='text-center font-eb-raleway text-4xl'>
				{t('page:portfolio.products.title').toUpperCase()}
			</p>

			<div className={clsx('grid grid-cols-1 gap-5', 'md:grid-cols-2', 'lg:grid-cols-3')}>
				{me.products.map((product) => (
					<div
						key={product.label}
						className={clsx(
							'flex gap-4 rounded-xl border border-woodsmoke-600 p-4',
							'cursor-pointer transition-all duration-500',
							'hover:shadow-lg hover:shadow-stickyclip-900',
						)}
						onClick={() => {
							setQuery(product.params);
						}}
					>
						<div className='flex size-14 items-center justify-center rounded-xl bg-white'>
							<img
								alt=''
								src={product.image}
								className='size-10'
							/>
						</div>

						<div className='flex flex-1 flex-col gap-2'>
							<p>{product.label}</p>
							<p className='text-woodsmoke-400'>{product.desc}</p>
							<p className='text-right text-sm text-blue-400'>{product.version}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
