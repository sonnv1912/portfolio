import { useMyProfile } from '@hooks/use-my-profile';
import clsx from 'clsx';
import { type PropsWithChildren, useEffect, useState } from 'react';
import styles from './loading.module.css';

type Props = {
	loading?: boolean;
	size?: number;
};

export const Loading = ({ loading, size = 60, children }: PropsWithChildren<Props>) => {
	const me = useMyProfile();
	const [loadingStyle, setLoadingStyle] = useState(true);
	const lineSize = size / 12;

	useEffect(() => {
		const link = document.querySelector('link[rel="stylesheet"]') as HTMLLinkElement;
		const educationImages = me.education.flatMap((item) => item.images);

		const preloadImages = (images: string[]) => {
			for (const image of images) {
				const img = new Image();
				img.src = image;
			}
		};

		preloadImages(educationImages);
		preloadImages([me.image]);

		if (link?.sheet?.cssRules) {
			setLoadingStyle(!(link?.sheet?.cssRules.length > 0));
		}
	}, [me.education, me.image]);

	return (
		<>
			{(loading || loadingStyle) && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 9999,
						backgroundColor: '#1b1b1b',
					}}
				>
					<div
						className={clsx(styles.loader)}
						style={{ width: size, height: size }}
					>
						<div
							className={clsx(styles.inner, styles.one)}
							style={{ borderBottom: `${lineSize}px solid #efeffa` }}
						/>
						<div
							className={clsx(styles.inner, styles.two)}
							style={{ borderRight: `${lineSize}px solid #efeffa` }}
						/>
						<div
							className={clsx(styles.inner, styles.three)}
							style={{ borderTop: `${lineSize}px solid #efeffa` }}
						/>
					</div>
				</div>
			)}

			{children}
		</>
	);
};
