import UnitedStateImage from '@assets/images/img-united-states.png';
import VietNamImage from '@assets/images/img_viet-nam.png';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import usCommon from './us/common.json';
import usMe from './us/me.json';

import vnCommon from './vn/common.json';
import vnMe from './vn/me.json';

const languages: Record<
	string,
	{
		image: string;
		label: string;
		code: string;
	}
> = {
	us: {
		image: UnitedStateImage,
		label: 'English',
		code: 'us',
	},
	vn: {
		image: VietNamImage,
		label: 'Tiếng Việt',
		code: 'vn',
	},
};

const getLanguage = () => {
	const language = localStorage.getItem('i18nextLng');

	if (
		language &&
		Object.keys(languages)
			.map((t) => t)
			.includes(language)
	) {
		return language;
	}

	return languages.vn.code;
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: languages.vn.code,
		lng: getLanguage(),
		interpolation: {
			escapeValue: false,
		},
		resources: {
			us: {
				me: usMe,
				common: usCommon,
			},
			vn: {
				me: vnMe,
				common: vnCommon,
			},
		},
	});

export default i18n;
export { languages };
