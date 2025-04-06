import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { NuqsAdapter } from 'nuqs/adapters/react';

import './configs/locales/i18n';

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
