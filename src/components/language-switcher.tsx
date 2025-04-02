import { languages } from '@/configs/locales/i18n';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
	const { i18n, t } = useTranslation();

	return (
		<div
			className={clsx(
				'flex size-12 flex-col items-center justify-center hover:bg-woodsmoke-700',
				'cursor-pointer select-none gap-2 rounded-md transition-all duration-500',
			)}
			data-tooltip-id='tooltip'
			data-tooltip-content={t('common:change')}
			data-tooltip-place='right'
			onKeyUp={() => {
				//
			}}
			onClick={() => {
				if (i18n.language === languages.vn.code) {
					i18n.changeLanguage(languages.us.code);

					localStorage.setItem('i18n', languages.us.code);

					return;
				}

				if (i18n.language === languages.us.code) {
					i18n.changeLanguage(languages.vn.code);

					localStorage.setItem('i18n', languages.vn.code);

					return;
				}
			}}
		>
			<img
				alt=''
				src={languages[i18n.language].image}
				className='w-6'
			/>
		</div>
	);
};

export { LanguageSwitcher };
