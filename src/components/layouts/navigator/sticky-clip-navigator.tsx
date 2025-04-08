import { StickyClipChangelogPage } from '@/pages/sticky-clip/changelog-page';
import { StickyClipHomePage } from '@/pages/sticky-clip/home-page';
import { StickyClipTeamsPage } from '@/pages/sticky-clip/teams-page';
import { env } from '@configs/env';
import { useNavigator } from '@hooks/use-navigator';
import { StickyClipLayout } from '@layouts/sticky-clip-layout';
import { useMemo, type ReactElement } from 'react';

export const StickyClipNavigator = () => {
	const {
		query: { name, tab, tabPage },
	} = useNavigator();

	const tabs = useMemo<Record<string, ReactElement>>(
		() => ({
			home: <StickyClipHomePage />,
			changelog: <StickyClipChangelogPage />,
			teams: <StickyClipTeamsPage />,
		}),
		[],
	);

	const shouldShow = useMemo(() => {
		if (tab === 'products' && name === env.repo.stickyClip) {
			return true;
		}

		return Object.keys(tabs).includes(tabPage);
	}, [tab, name, tabs, tabPage]);

	if (!shouldShow) {
		return null;
	}

	return <StickyClipLayout>{tabs[tabPage]}</StickyClipLayout>;
};
