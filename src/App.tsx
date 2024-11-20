import { AboutMe } from '@components/about-me';
import { Contact } from '@components/contact';
import { Education } from '@components/education';
import { Sidebar } from '@components/sidebar';
import { Skills } from '@components/skills';
import { WorkExperience } from '@components/work-experiences';
import { UIEvent, useRef, useState } from 'react';

function App() {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillRef = useRef<HTMLDivElement>(null);
	const workExperienceRef = useRef<HTMLDivElement>(null);
	const educationRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<1 | 2 | 3 | 4 | 5>(1);

	const onScroll = (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
		const target = e.target as HTMLDivElement;

		const check = (itemOffsetTop: number = 0) => {
			return (
				Math.abs(target.scrollTop - itemOffsetTop) >= 0 &&
				Math.abs(target.scrollTop - itemOffsetTop) <= 100
			);
		};

		if (check(aboutMeRef.current?.offsetTop)) {
			setActive(1);
		}

		if (check(skillRef.current?.offsetTop)) {
			setActive(2);
		}

		if (check(workExperienceRef.current?.offsetTop)) {
			setActive(3);
		}

		if (check(educationRef.current?.offsetTop)) {
			setActive(4);
		}

		if (check(contactRef.current?.offsetTop)) {
			setActive(5);
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
						educationRef.current?.scrollIntoView();
					}

					if (value === 5) {
						contactRef.current?.scrollIntoView();
					}
				}}
			/>

			<div
				className='h-screen flex-1 overflow-auto scroll-smooth'
				onScroll={(e) => onScroll(e)}
			>
				<div ref={aboutMeRef}>
					<AboutMe />
				</div>

				<div ref={skillRef}>
					<Skills />
				</div>

				<div ref={workExperienceRef}>
					<WorkExperience />
				</div>

				<div ref={educationRef}>
					<Education />
				</div>

				<div ref={contactRef}>
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
