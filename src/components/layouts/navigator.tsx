import { ContactPage } from '@/pages/portfolio/contact-page';
import { DegreesPage } from '@/pages/portfolio/degrees-page';
import { MePage } from '@/pages/portfolio/me-page';
import { ProductsPage } from '@/pages/portfolio/products-page';
import { ProjectsPage } from '@/pages/portfolio/projects-page';
import { SkillsPage } from '@/pages/portfolio/skills-page';
import { StickyClipHomePage } from '@/pages/sticky-clip/home-page';
import { AnimatedPage } from '@components/ui/animated-page';
import { useMyProfile } from '@hooks/use-my-profile';
import { DefaultLayout } from '@layouts/default-layout';
import { StickyClipLayout } from '@layouts/sticky-clip-layout';
import { AnimatePresence } from 'motion/react';
import { parseAsString, useQueryStates } from 'nuqs';
import { type ReactElement, useMemo } from 'react';

const PortfolioNavigator = () => {
	const me = useMyProfile();

	const [{ name, tab }] = useQueryStates({
		tab: parseAsString.withDefault('me'),
		name: parseAsString.withDefault(''),
	});

	const tabs = useMemo<Record<string, ReactElement>>(
		() => ({
			me: <MePage />,
			skills: <SkillsPage />,
			degrees: <DegreesPage />,
			projects: <ProjectsPage />,
			contact: <ContactPage />,
			products: <ProductsPage />,
		}),
		[],
	);

	const shouldShow = useMemo(() => {
		if (tab === 'products' && me.products.find((t) => t.params.name === name)) {
			return false;
		}

		return Object.keys(tabs).includes(tab);
	}, [me.products, name, tab, tabs]);

	return shouldShow && <DefaultLayout>{tabs[tab]}</DefaultLayout>;

	return (
		<AnimatePresence
			mode='wait'
			initial={false}
		>
			{shouldShow && (
				<DefaultLayout>
					<AnimatedPage tab={tab}>{tabs[tab]}</AnimatedPage>
				</DefaultLayout>
			)}
		</AnimatePresence>
	);
};

const StickyClipNavigator = () => {
	const [{ name, tab, tabPage }] = useQueryStates({
		tab: parseAsString.withDefault(''),
		name: parseAsString.withDefault(''),
		tabPage: parseAsString.withDefault(''),
	});

	const tabs = useMemo<Record<string, ReactElement>>(
		() => ({
			home: <StickyClipHomePage />,
		}),
		[],
	);

	const shouldShow = useMemo(() => {
		if (tab === 'products' && name === 'sticky-clip') {
			return true;
		}

		return Object.keys(tabs).includes(tabPage);
	}, [tab, name, tabs, tabPage]);

	return (
		shouldShow && (
			<StickyClipLayout>
				<div className='flex w-screen flex-1 flex-col'>{tabs[tabPage]}</div>
			</StickyClipLayout>
		)
	);

	return (
		<AnimatePresence
			mode='wait'
			initial={false}
		>
			{shouldShow && (
				<StickyClipLayout>
					<AnimatedPage
						tab={tabPage}
						className='flex w-screen flex-1 flex-col'
					>
						{tabs[tabPage]}
					</AnimatedPage>
				</StickyClipLayout>
			)}
		</AnimatePresence>
	);
};

export const Navigator = () => {
	return (
		<>
			<PortfolioNavigator />

			<StickyClipNavigator />
		</>
	);
};
