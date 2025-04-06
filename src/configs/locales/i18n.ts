import UnitedStateImage from '@assets/images/img-united-states.png';
import VietNamImage from '@assets/images/img-viet-nam.png';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import usCommon from './us/common.json';
import usMe from './us/me.json';
import usPage from './us/page.json';

import vnCommon from './vn/common.json';
import vnMe from './vn/me.json';
import vnPage from './vn/page.json';

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
	const language = localStorage.getItem('i18n');

	if (
		language &&
		Object.keys(languages)
			.map((t) => t)
			.includes(language)
	) {
		return language;
	}

	return languages.us.code;
};

i18n.use(initReactI18next).init({
	fallbackLng: languages.us.code,
	lng: getLanguage(),
	interpolation: {
		escapeValue: false,
	},
	resources: {
		us: {
			me: usMe,
			common: usCommon,
			page: usPage,
		},
		vn: {
			me: vnMe,
			common: vnCommon,
			page: vnPage,
		},
	},
});

export { languages, i18n };
