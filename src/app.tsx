import { Navigator } from '@components/layouts/navigator';
import { Tooltip } from 'react-tooltip';

export const App = () => {
	return (
		<>
			<Navigator />

			<Tooltip
				id='tooltip'
				opacity={1}
				style={{
					backgroundColor: '#454545',
					color: 'white',
					zIndex: 9999,
					maxWidth: 300,
					wordBreak: 'break-all',
					boxShadow: '1px 1px 10px rgba(255,255,255,0.2)',
				}}
			/>
		</>
	);
};
