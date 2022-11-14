import React, {useState} from 'react';
import type {AppProps} from 'next/app';
import type {DehydratedState} from '@tanstack/react-query';
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import '../styles/globals.css';

type Props = {
	dehydratedState: DehydratedState;
};

export default function App({Component, pageProps}: AppProps<Props>) {
	const [client] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={client}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
