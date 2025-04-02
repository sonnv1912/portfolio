import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { NuqsAdapter } from 'nuqs/adapters/react';

const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<NuqsAdapter>
				<App />
			</NuqsAdapter>
		</StrictMode>,
	);
}
