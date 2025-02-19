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
import KoChanImage from '@assets/images/img-kochan.webp';
import KolelImage from '@assets/images/img-kolel.webp';
import MeImage from '@assets/images/img-me.jpg';
import PlayConsoleImage from '@assets/images/img-play-console.png';
import { useTranslation } from 'react-i18next';
import { HiLink } from 'react-icons/hi';

const useMyProfile = () => {
	const { t } = useTranslation();

	return {
		name: t('me:name'),
		shortDesc: t('me:shortDesc'),
		image: MeImage,
		cv: {
			us: 'https://drive.usercontent.google.com/download?id=1kTV1VkNaWAExLC9corXL1uzGkiarmkHn&export=download',
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
			{
				id: 7,
				href: 'https://appstoreconnect.apple.com/login',
				image: PlayConsoleImage,
			},
		],
		skills: [
			{
				label: t('common:programming_languages'),
				items: ['JavaScript', 'TypeScript'],
			},
			{
				label: 'Web Technologies',
				items: ['HTML', 'CSS', 'Tailwind CSS'],
			},
			{
				label: 'Web Development',
				items: ['React.js', 'Next.js'],
			},
			{
				label: 'Mobile Development',
				items: ['React Native', 'Expo'],
			},
			{
				label: 'Source Control',
				items: ['Git (Git Shell & GitHub)', 'Bitbucket'],
			},
			{
				label: 'Tools',
				items: ['Visual Studio Code', 'Android Studio', 'Xcode', 'Figma'],
			},
		],
		experiences: [
			{
				company: 'GOSOFT TECHNOLOGY COMPANY LIMITED',
				position: 'Front End Developer',
				appLogo: KoChanImage,
				appName: 'Kochan',
				time: `${t('common:month.may')}, 2023 - ${t('common:current')}`,
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
				platforms: [
					{
						label: 'ios',
						link: 'https://apps.apple.com/us/app/kochan/id6475354598',
					},
					{
						label: 'android',
						link: 'https://play.google.com/store/apps/details?id=com.amf.kochan&hl=en',
					},
				],
			},
			{
				company: 'Mesilot Foundation, Inc.',
				position: 'React Native Developer (Freelancer)',
				appLogo: KolelImage,
				appName: 'Kolel - Judaism, Torah Videos',
				time: `${t('common:month.feb')}, 2025 - ${t('common:current')}`,
				location: 'Viet Nam (Remote)',
				appDescription: t('me:experiences.kolel.app_description'),
				teamSize: 3,
				responsibilities: [
					{
						label: t('me:experiences.kolel.responsibilities.collaborated.label'),
						content: t('me:experiences.kolel.responsibilities.collaborated.content'),
					},
					{
						label: t('me:experiences.kolel.responsibilities.debug.label'),
						content: t('me:experiences.kolel.responsibilities.debug.content'),
					},
					{
						label: t('me:experiences.kolel.responsibilities.design.label'),
						content: t('me:experiences.kolel.responsibilities.design.content'),
					},
					{
						label: t('me:experiences.kolel.responsibilities.release-test.label'),
						content: t('me:experiences.kolel.responsibilities.release-test.content'),
					},
				],
				platforms: [
					{
						label: 'ios',
						link: 'https://apps.apple.com/us/app/kolel-judaism-torah-videos/id1497982129',
					},
					{
						label: 'android',
						link: 'https://play.google.com/store/apps/details?id=org.kolel&hl=en',
					},
				],
			},
		],
		contact: [
			{
				icon: HiLink,
				label: 'Website',
				href: 'https://sonnv1912.github.io/portfolio/',
				content: 'Ngo Van Son - Front End Developer',
			},
		],
		links: [
			{
				icon: GithubImage,
				label: 'Github',
				href: 'https://github.com/sonnv1912',
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
