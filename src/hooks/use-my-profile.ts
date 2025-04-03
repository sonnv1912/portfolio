import AppleImage from '@assets/images/img-apple.png';
import BitbucketImage from '@assets/images/img-bitbucket.png';
import DegreeImage from '@assets/images/img-degree.jpg';
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
import MeImage from '@assets/images/img-me.png';
import PlayConsoleImage from '@assets/images/img-play-console.png';
import ToeicImage from '@assets/images/img-toeic.jpg';
import { useTranslation } from 'react-i18next';

const useMyProfile = () => {
	const { t } = useTranslation();

	return {
		name: t('me:name'),
		shortDesc: t('me:shortDesc'),
		image: MeImage,
		cv: {
			us: 'https://drive.google.com/file/d/1L5LwkxMuSDzMxi-bpTr2VGnLs7jjphF3/view?usp=drive_link',
			vn: 'https://drive.google.com/file/d/1bYb7b1_E4RGPCRdy_lmyv8prjhFngiNQ/view?usp=drive_link',
		} as Record<string, string>,
		workedWith: [
			{
				href: 'https://bitbucket.org/',
				image: BitbucketImage,
			},
			{
				href: 'https://www.atlassian.com/software/jira',
				image: JiraImage,
			},
			{
				href: 'https://www.figma.com/',
				image: FigmaImage,
			},
			{
				href: 'https://firebase.google.com/',
				image: FirebaseImage,
			},
			{
				href: 'https://git-scm.com/',
				image: GitImage,
			},
			{
				href: 'https://fastlane.tools/',
				image: FastlaneImage,
			},
			{
				href: 'https://developer.apple.com/app-store-connect',
				image: AppleImage,
			},
			{
				href: 'https://developer.android.com/distribute/console',
				image: PlayConsoleImage,
			},
		],
		skills: [
			{
				label: t('common:programming_languages'),
				items: [
					{
						label: 'JavaScript',
						link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
						desc: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions',
					},
					{
						label: 'TypeScript',
						link: 'https://www.typescriptlang.org/',
						desc: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale',
					},
				],
			},
			{
				label: 'API Integration',
				items: [
					{
						label: 'RESTful APIs',
						link: 'https://www.geeksforgeeks.org/what-is-restful-api/',
						desc: 'A RESTful API (Representational State Transfer) is a type of web service that follows the principles of REST',
					},
					{
						label: 'Axios',
						link: 'https://axios-http.com/docs/intro',
						desc: 'Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase)',
					},
					{
						label: 'React Query',
						link: 'https://tanstack.com/query/latest/docs/framework/react/overview',
						desc: 'TanStack Query (formerly known as React Query) is often described as the missing data-fetching library for web applications',
					},
				],
			},
			{
				label: 'Frontend Frameworks & Libraries',
				items: [
					{
						label: 'React Native',
						link: 'https://reactnative.dev',
						desc: 'React Native allows developers who know React to create native apps',
					},
					{
						label: 'Expo',
						link: 'https://docs.expo.dev',
						desc: 'Expo is a framework that makes developing Android and iOS apps easier',
					},
					{
						label: 'ReactJs',
						link: 'https://react.dev',
						desc: 'The library for web and native user interfaces',
					},
					{
						label: 'NextJs',
						link: 'https://nextjs.org',
						desc: 'Next.js is a React framework for building full-stack web applications',
					},
					{
						label: 'Tailwind CSS',
						link: 'https://tailwindcss.com',
						desc: 'A utility-first CSS framework packed with classes',
					},
				],
			},
			{
				label: 'State Management',
				items: [
					{
						label: 'Redux',
						link: 'https://redux.js.org',
						desc: 'A JS library for predictable and maintainable global state management',
					},
					{
						label: 'Context API',
						link: 'https://react.dev/reference/react/useContext',
						desc: 'useContext is a React Hook that lets you read and subscribe to context from your component',
					},
					{
						label: 'Zustand',
						link: 'https://zustand.docs.pmnd.rs/getting-started/introduction',
						desc: 'A small, fast, and scalable bearbones state management solution',
					},
					{
						label: 'Legend State',
						link: 'https://legendapp.com/open-source/state/v3/intro/introduction',
						desc: 'Legend-State is a super fast all-in-one local and remote state library that helps you write less code to make faster apps',
					},
				],
			},

			{
				label: 'Source Control',
				items: [
					{
						label: 'Git',
						link: 'https://git-scm.com',
						desc: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency',
					},
					{
						label: 'Bitbucket',
						link: 'https://bitbucket.org/product/guides/getting-started/overview#a-brief-overview-of-bitbucket',
						desc: 'Bitbucket Cloud is a Git based code hosting and collaboration tool, built for teams',
					},
				],
			},
			{
				label: 'Tools & Platforms',
				items: [
					{
						label: 'Figma',
						link: 'https://www.figma.com',
						desc: 'Figma helps design and development teams build great products, together',
					},
					{
						label: 'Xcode',
						link: 'https://developer.apple.com/xcode',
						desc: 'Xcode enables you to develop, test, and distribute apps for all Apple platforms',
					},
					{
						label: 'Jira',
						link: 'https://www.atlassian.com/software/jira',
						desc: 'The only project management tool you need to plan and track work across every team',
					},
					{
						label: 'Firebase',
						link: 'https://firebase.google.com',
						desc: 'Build & run modern, AI-powered experiences users love with Firebase, a platform designed to support you throughout your app development journey',
					},
					{
						label: 'Google Play Console',
						link: 'https://developer.android.com/distribute/console',
						desc: 'Publish your apps and games with Google Play Console and grow your business on Google Play',
					},
					{
						label: 'Apple Store Connect',
						link: 'https://developer.apple.com/app-store-connect',
						desc: 'As an Apple Developer Program member, you can easily upload, submit, and manage your apps on the App Store with App Store Connect on the web, iPhone, and iPad',
					},
				],
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
				icon: MeImage,
				label: 'Website',
				href: 'https://sonnv1912.github.io/portfolio/',
				content: 'Portfolio - Ngo Van Son',
			},
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
				images: [DegreeImage, ToeicImage],
			},
		],
	};
};

export { useMyProfile };
