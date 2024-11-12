import { AboutMe } from '@components/about-me';
import { Contact } from '@components/contact';
import { Header } from '@components/header';
import { Skills } from '@components/skills';
import { WorkExperience } from '@components/work-experiences';

function App() {
	return (
		<div className='flex'>
			<Header />

			<div className='h-screen flex-1 overflow-auto scroll-smooth'>
				<AboutMe />

				<Skills />

				<WorkExperience />

				<Contact />
			</div>
		</div>
	);
}

export default App;
