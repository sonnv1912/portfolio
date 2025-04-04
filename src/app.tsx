import { Navigator } from '@components/layouts/navigator';
import { Loading } from '@components/ui/loading';
import { useMyProfile } from '@hooks/use-my-profile';
import { DefaultLayout } from '@layouts/default';
import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

export const App = () => {
	const me = useMyProfile();

	useEffect(() => {
		const educationImages = me.education.flatMap((item) => item.images);

		const preloadImages = (images: string[]) => {
			for (const image of images) {
				const img = new Image();
				img.src = image;
			}
		};

		preloadImages(educationImages);
	}, [me.education]);

	return (
		<Loading>
			<DefaultLayout>
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
			</DefaultLayout>
		</Loading>
	);
};
