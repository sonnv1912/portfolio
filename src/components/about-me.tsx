import { useMyProfile } from '@data/me';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineDownload } from 'react-icons/hi';
import { BlinkBrand } from './blink-brand';

const AboutMe = () => {
	const me = useMyProfile();
	const { t, i18n } = useTranslation();
	const isVN = useMemo(() => i18n.language === 'vn', [i18n.language]);

	return (
		<div
			className={clsx(
				'flex min-h-screen flex-col gap-8 bg-black p-8 text-white',
				'md:p-12',
				'lg:p-20',
			)}
		>
			<div
				className={clsx(
					'flex flex-col items-start gap-12',
					'md:flex-1 md:flex-row',
					'lg:items-center',
				)}
			>
				<div className='flex flex-1 flex-col gap-6'>
					<p className='flex-1 font-eb-raleway text-5xl'>{me.name}</p>

					<p
						className='text-justify leading-8'
						dangerouslySetInnerHTML={{ __html: me.shortDesc }}
					/>

					<div className='flex items-center gap-4'>
						<a
							href={isVN ? me.cv.vn : me.cv.us}
							download='Ngo Van Son - Front End Developer.pdf'
							className={clsx(
								'w-fit rounded-lg border border-green-400 bg-green-500 px-4 py-2 shadow-lg',
								'flex items-center gap-2 shadow-green-400 hover:bg-green-600',
							)}
						>
							<HiOutlineDownload className='size-5' />

							<p>{isVN ? 'CV (VN)' : 'CV (US)'}</p>
						</a>
					</div>
				</div>

				<img
					src={me.image}
					className={clsx(
						'order-first mx-auto size-80 rounded-full object-cover',
						'md:order-last md:size-60',
						'lg:size-80',
					)}
				/>
			</div>

			<div>
				<p className='mb-5'>{t('common:worked_with')}:</p>

				<BlinkBrand />
			</div>
		</div>
	);
};

export { AboutMe };
