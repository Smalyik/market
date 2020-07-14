import Head from 'next/head';
import React from 'react';
import s from './Page.module.sass';

interface PageProps {
	title: string;
	children: React.ReactNode;
}

const Page: React.FC<PageProps> = props => {
	const { title, children } = props;

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header /> */}
			<main id="pagewrap">{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default Page;
