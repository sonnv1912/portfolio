import { languages } from '@config/locales/i18n';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation();

	return (
		<div
			className={clsx(
				'flex flex-col items-center justify-center py-3 hover:bg-woodsmoke-700',
				'cursor-pointer select-none gap-2 rounded-2xl px-2 transition-all duration-500',
			)}
			onClick={() => {
				if (i18n.language === languages.vn.code) {
					i18n.changeLanguage(languages.us.code);

					return;
				}

				if (i18n.language === languages.us.code) {
					i18n.changeLanguage(languages.vn.code);

					return;
				}
			}}
		>
			<img
				src={languages[i18n.language].image}
				className='w-6'
			/>

			<p className='text-xs'>{t('common:change')}</p>
		</div>
	);
};

export { LanguageSwitcher };
