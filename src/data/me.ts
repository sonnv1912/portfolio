import AppleImage from '@assets/images/img-apple.png';
import BitbucketImage from '@assets/images/img-bitbucket.png';
import FacebookImage from '@assets/images/img-facebook.png';
import FastlaneImage from '@assets/images/img-fastlane.png';
import FigmaImage from '@assets/images/img-figma.png';
import FirebaseImage from '@assets/images/img-firebase.png';
import GitImage from '@assets/images/img-git.png';
import GithubImage from '@assets/images/img-github.png';
import HUITImage from '@assets/images/img-huit.png';
import JiraImage from '@assets/images/img-jira.png';
import KoChanImage from '@assets/images/img-kochan.png';
import MeImage from '@assets/images/img-me.jpg';
import CvPDFUS from '@assets/pdf/pdf-cv-us.pdf';
import CvPDFVN from '@assets/pdf/pdf-cv-vn.pdf';
import { useTranslation } from 'react-i18next';
import { HiLink, HiOutlineMail, HiPhone } from 'react-icons/hi';

const useMyProfile = () => {
	const { t } = useTranslation();

	return {
		name: t('me:name'),
		shortDesc: t('me:shortDesc'),
		image: MeImage,
		cv: {
			us: CvPDFUS,
			vn: CvPDFVN,
		},
		workedWith: [
			{
				id: 1,
				href: 'https://bitbucket.org/',
				image: BitbucketImage,
			},
			{
				id: 2,
				href: 'https://www.atlassian.com/software/jira',
				image: JiraImage,
			},
			{
				id: 3,
				href: 'https://www.figma.com/',
				image: FigmaImage,
			},
			{
				id: 4,
				href: 'https://firebase.google.com/',
				image: FirebaseImage,
			},
			{
				id: 5,
				href: 'https://git-scm.com/',
				image: GitImage,
			},
			{
				id: 6,
				href: 'https://fastlane.tools/',
				image: FastlaneImage,
			},
			{
				id: 7,
				href: 'https://appstoreconnect.apple.com/login',
				image: AppleImage,
			},
		],
		skills: [
			{
				label: t('common:programming_languages'),
				textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
				items: ['Javascript', 'Typescript', 'HTML', 'CSS'],
			},
			{
				label: 'Frameworks',
				textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
				items: ['ReactJS', 'NextJS', 'React Native', 'Tailwind CSS', 'Expo'],
			},
			{
				label: 'Version Control',
				textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
				items: ['Git (Git Shell & Github)', 'Bitbucket'],
			},
			{
				label: t('common:tool'),
				textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
				items: ['Visual Studio Code', 'Android Studio', 'XCode', 'Figma'],
			},
			{
				label: t('common:language'),
				textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
				items: ['English (TOEIC 620/990)'],
			},
		],
		experiences: [
			{
				company: 'GOSOFT TECHNOLOGY COMPANY LIMITED',
				position: 'Front-End Developer',
				appLogo: KoChanImage,
				appName: 'Kochan',
				time: `${t('common:month.may')}, 2023 - ${t('common:month.nov')}, 2024`,
				location: 'Viet Nam',
				appDescription: t('me:experiences.kochan.app_description'),
				teamSize: 20,
				responsibilities: [
					{
						label: t('me:experiences.kochan.responsibilities.fcm.label'),
						content: t('me:experiences.kochan.responsibilities.fcm.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.collaborated.label'),
						content: t('me:experiences.kochan.responsibilities.collaborated.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.env.label'),
						content: t('me:experiences.kochan.responsibilities.env.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.music.label'),
						content: t('me:experiences.kochan.responsibilities.music.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.debug.label'),
						content: t('me:experiences.kochan.responsibilities.debug.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.design.label'),
						content: t('me:experiences.kochan.responsibilities.design.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.otp.label'),
						content: t('me:experiences.kochan.responsibilities.otp.content'),
					},
					{
						label: t('me:experiences.kochan.responsibilities.automated.label'),
						content: t('me:experiences.kochan.responsibilities.automated.content'),
					},
				],
				accomplishments: t('me:experiences.kochan.accomplishments'),
				technologies: 'ReactJS, NextJS, React Native, Expo, Redux, React Query, Fastlane.',
			},
		],
		contact: [
			{
				icon: HiOutlineMail,
				label: 'Email',
				href: 'mailto:sonnv1912@gmail.com',
				content: 'sonnv1912@gmail.com',
			},
			{
				icon: HiLink,
				label: 'Website',
				href: 'https://chuazz.github.io/portfolio/',
				content: 'https://chuazz.github.io/portfolio/',
			},
			{
				icon: HiPhone,
				label: t('common:phone'),
				href: 'tel:0357370009',
				content: '035.737.0009',
			},
		],
		links: [
			{
				icon: GithubImage,
				label: 'Github',
				href: 'https://github.com/Chuazz',
				content: 'sonnv1912',
			},
			{
				icon: FacebookImage,
				label: 'Facebook',
				href: 'https://www.facebook.com/profile.php?id=100040068023039',
				content: 'Ngô Văn Sơn',
			},
		],
		education: [
			{
				label: t('me:education.huit.label'),
				time: t('me:education.huit.time'),
				location: 'Viet Nam',
				content: t('me:education.huit.content'),
				image: HUITImage,
			},
		],
	};
};

export { useMyProfile };
