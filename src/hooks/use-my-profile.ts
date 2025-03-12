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
import LinkedinImage from '@assets/images/img-linkedin.png';
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
		cv: 'https://drive.google.com/file/d/1L5LwkxMuSDzMxi-bpTr2VGnLs7jjphF3/view?usp=drive_link',
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
			// {
			// 	label: 'Web Technologies',
			// 	items: ['HTML', 'CSS', 'Tailwind CSS'],
			// },
			// {
			// 	label: 'Web Development',
			// 	items: ['React.js', 'Next.js'],
			// },
			{
				label: 'React Native Development',
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
				position: 'React Native Developer',
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
				technologies:
					'React Native, Expo, Turborepo, Firebase (Handle notification, real-time chat application), React Query (Handle api state), Redux, Legend State',
			},
			{
				company: 'GOSOFT TECHNOLOGY COMPANY LIMITED',
				position: 'React Native Developer',
				appLogo: KolelImage,
				appName: 'Kochan Kolel - Judaism, Torah Videos',
				time: `${t('common:month.feb')}, 2024 - ${t('common:current')}`,
				location: 'Viet Nam',
				appDescription: t('me:experiences.kolel.app_description'),
				teamSize: 20,
				responsibilities: [
					{
						label: t('me:experiences.kolel.responsibilities.maintain.label'),
						content: t('me:experiences.kolel.responsibilities.maintain.content'),
					},
					{
						label: t('me:experiences.kolel.responsibilities.release.label'),
						content: t('me:experiences.kolel.responsibilities.release.content'),
					},
					{
						label: t('me:experiences.kolel.responsibilities.sentry.label'),
						content: t('me:experiences.kolel.responsibilities.sentry.content'),
					},
				],
				technologies:
					'React Native, Firebase (Push notification) Redux, Sentry, React Navigation, react-i18next',
			},
		],
		contact: [
			{
				icon: HiLink,
				label: 'Website',
				href: 'https://sonnv1912.github.io/portfolio/',
				content: 'Ngo Van Son - React Native Developer',
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
			{
				icon: LinkedinImage,
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/s%C6%A1n-ng%C3%B4-006876355?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDtXrRuFARluiwC6RLgocyQ%3D%3D',
				content: 'Sơn Ngô',
			},
		],
		education: [
			{
				label: t('me:education.huit.label'),
				time: t('me:education.huit.time'),
				location: 'Viet Nam',
				content: t('me:education.huit.content'),
				image: HUITImage,
				level: 'Good',
			},
		],
	};
};

export { useMyProfile };
