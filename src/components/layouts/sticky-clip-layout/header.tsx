import i18n from '@/configs/locales/i18n';
import StickyClipIcon from '@assets/icons/ic-clipboard.png';
import clsx from 'clsx';
import { useQueryStates, parseAsString } from 'nuqs';
import { FaApple, FaWindows } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';

export const StickyClipLayoutHeader = () => {
	const isMac = window.navigator.userAgentData?.platform.includes('mac');
	const isWin = window.navigator.userAgentData?.platform.includes('win');

	const [, setQuery] = useQueryStates({
		tab: parseAsString.withDefault(''),
		name: parseAsString.withDefault('').withOptions({
			clearOnDefault: true,
		}),
		tabPage: parseAsString.withDefault('').withOptions({
			clearOnDefault: true,
		}),
	});

	const tab = [
		{
			label: i18n.t('common:teams'),
		},
		{
			label: i18n.t('common:changelog'),
		},
	];

	return (
		<div className={clsx('fixed left-0 right-0 top-5 z-10', 'flex justify-center')}>
			<div
				className={clsx(
					'rounded-lg border border-woodsmoke-600 bg-woodsmoke-950 px-5 py-4',
					'flex w-[80vw] items-center justify-between gap-2',
				)}
			>
				<div className='flex items-center gap-2 text-white'>
					<FaArrowLeftLong
						className='cursor-pointer text-woodsmoke-300 hover:text-white'
						data-tooltip-id='tooltip'
						data-tooltip-content={i18n.t('common:back')}
						onClick={() => {
							setQuery({
								name: '',
								tab: 'products',
								tabPage: '',
							});
						}}
					/>

					<div className='mx-2 h-5 w-[1px] bg-woodsmoke-300' />

					<img
						src={StickyClipIcon}
						alt=''
						className='size-6'
					/>

					<p className='text-sm'>Sticky Clip</p>
				</div>

				<div className='flex items-center gap-7'>
					{tab.map((item) => (
						<p
							key={item.label}
							className='cursor-pointer text-sm text-woodsmoke-300 hover:text-white'
						>
							{item.label}
						</p>
					))}
				</div>

				<div className='flex items-center gap-5'>
					{isMac && (
						<div
							className={clsx(
								'flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm',
								'bg-woodsmoke-100 hover:bg-white',
							)}
						>
							<FaApple size={18} />

							<p>{i18n.t('common:download')}</p>
						</div>
					)}

					{isWin && (
						<div
							className={clsx(
								'flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm',
								'bg-woodsmoke-100 hover:bg-white',
							)}
						>
							<FaWindows size={18} />

							<p>{i18n.t('common:coming_soon')}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
