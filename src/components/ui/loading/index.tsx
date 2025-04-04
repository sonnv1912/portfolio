import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import styles from './loading.module.css';

type Props = {
	loading?: boolean;
	size?: number;
};

export const Loading = ({ loading, size = 60 }: PropsWithChildren<Props>) => {
	const lineSize = size / 12;

	return (
		loading && (
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
		)
	);
};
