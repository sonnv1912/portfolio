import { AboutMe } from '@components/about-me';
import { Contact } from '@components/contact';
import { Sidebar } from '@components/sidebar';
import { Skills } from '@components/skills';
import { WorkExperience } from '@components/work-experiences';
import { UIEvent, useRef, useState } from 'react';

function App() {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<HTMLDivElement>(null);
	const workExperienceRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<1 | 2 | 3 | 4>(1);

	const onScroll = (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
		const target = e.target as HTMLDivElement;

		if (
			target.scrollTop - (aboutMeRef.current?.offsetTop || 0) >= 0 &&
			target.scrollTop - (aboutMeRef.current?.offsetTop || 0) < 100
		) {
			setActive(1);
		}
		if (
			target.scrollTop - (skillRef.current?.offsetTop || 0) >= 0 &&
			target.scrollTop - (skillRef.current?.offsetTop || 0) < 100
		) {
			setActive(2);
		}
		if (
			target.scrollTop - (workExperienceRef.current?.offsetTop || 0) >= 0 &&
			target.scrollTop - (workExperienceRef.current?.offsetTop || 0) < 100
		) {
			setActive(3);
		}
		if (
			target.scrollTop - (contactRef.current?.offsetTop || 0) >= 0 &&
			target.scrollTop - (contactRef.current?.offsetTop || 0) < 100
		) {
			setActive(4);
		}
	};

	return (
		<div className='relative flex'>
			<Sidebar
				value={active}
				onChange={(value) => {
					setActive(value);

					if (value === 1) {
						aboutMeRef.current?.scrollIntoView();
					}
					if (value === 2) {
						skillRef.current?.scrollIntoView();
					}
					if (value === 3) {
						workExperienceRef.current?.scrollIntoView();
					}
					if (value === 4) {
						contactRef.current?.scrollIntoView();
					}
				}}
			/>

			<div
				className='h-screen flex-1 overflow-auto scroll-smooth'
				onScroll={(e) => onScroll(e)}
			>
				<div
					id='1'
					ref={aboutMeRef}
				>
					<AboutMe />
				</div>

				<div
					id='1'
					ref={skillRef}
				>
					<Skills />
				</div>

				<div
					id='1'
					ref={workExperienceRef}
				>
					<WorkExperience />
				</div>

				<div
					id='1'
					ref={contactRef}
				>
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
