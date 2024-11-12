import AppleImage from '@assets/images/img_apple.png';
import BitbucketImage from '@assets/images/img_bitbucket.png';
import FacebookImage from '@assets/images/img_facebook.png';
import FastlaneImage from '@assets/images/img_fastlane.png';
import FigmaImage from '@assets/images/img_figma.png';
import FirebaseImage from '@assets/images/img_firebase.png';
import GitImage from '@assets/images/img_git.png';
import GithubImage from '@assets/images/img_github.png';
import JiraImage from '@assets/images/img_jira.png';
import KoChanImage from '@assets/images/img_kochan.png';
import MeImage from '@assets/images/img_me.jpg';
import CvPDF from '@assets/pdf/pdf_cv.pdf';
import { HiLink, HiOutlineMail, HiPhone } from 'react-icons/hi';
import { MdLocationPin } from 'react-icons/md';

const me = {
	name: 'Ngo Van Son',
	shortDesc: `
		HI. I am a <span class="px-2 py-1 font-semibold bg-blue-500 rounded-md">Front End Developer</span>
	 	with over one year of experience in building web and mobile applications. I have a strong understanding of HTML, CSS, and JavaScript, 
		along with hands-on experience using React, Next.js, and React Native. I am passionate about creating efficient, 
		responsive user interfaces and am always eager to learn and grow in the ever-evolving field of front-end development. 
		With a keen eye for detail and a commitment to quality, I strive to deliver code that not only meets project requirements but also provides a seamless user experience.
	`,
	image: MeImage,
	cv: CvPDF,
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
			label: 'Programming Languages',
			textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
			items: ['Javascript', 'Typescript', 'HTML', 'CSS'],
		},
		{
			label: 'Frameworks & Platforms',
			textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
			items: ['ReactJS', 'NextJS', 'React Native', 'Tailwind CSS', 'Firebase SDK'],
		},
		{
			label: 'Version Control',
			textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
			items: ['Git (Git Shell & Github)', 'Bitbucket'],
		},
		{
			label: 'Tools',
			textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
			items: ['Visual Studio Code', 'Android Studio', 'XCode', 'Figma'],
		},
		{
			label: 'Languages',
			textColor: 'bg-slate-100 text-blue-700 hover:bg-blue-700 hover:text-white',
			items: ['English (TOEIC 620/990)', 'Vietnamese (Native Speaker)'],
		},
	],
	experiences: [
		{
			position: 'Front End Developer',
			appLogo: KoChanImage,
			appName: 'Kochan',
			time: 'May 2023 - Current',
			location: 'Viet Nam',
			appDescription:
				'Kochan is a unique e-commerce platform tailored for the Aerobic community, combining online shopping and community engagement. Users can shop a diverse range of products, from nutrition to fashion, with a user-friendly interface for seamless transactions. Key features include efficient order management, affiliate marketing opportunities, and community connections, allowing users to share interests and attend events. Kochan offers intelligent product filtering, regular promotions, reliable customer support, and secure transactions, creating a comprehensive and enjoyable shopping experience.',
			teamSize: 20,
			accomplishments:
				'Learned Expo, NextJS framework, Firebase Cloud Message, automation deploy ios, android with fastlane, send SMS directly from android device by native code. Improved teamwork skill.',
			technologies: 'Expo, Redux, React Query, Legend State.',
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
			label: 'Phone',
			href: 'tel:0357370009',
			content: '035.737.0009',
		},
		{
			icon: MdLocationPin,
			label: 'Address',
			href: 'https://maps.app.goo.gl/MK3Q9z5UEGZXKtiHA',
			content: 'District 12, Ho Chi Minh City, Viet Nam',
		},
	],
	links: [
		{
			icon: GithubImage,
			label: 'Github',
			href: 'https://github.com/Chuazz',
			content: 'chuazz',
		},
		{
			icon: FacebookImage,
			label: 'Facebook',
			href: 'https://www.facebook.com/profile.php?id=100040068023039',
			content: 'Ngô Văn Sơn',
		},
	],
};

export { me };
